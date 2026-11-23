---
title: "Turklex'i kendi sunucularımızda nasıl işletiyoruz"
excerpt: "Turklex'in API'si ve veritabanları kendi sunucularımızda çalışıyor. Ortamları Terraform ve Ansible ile nasıl tanımladığımızı, GitHub Actions ile nasıl yayına aldığımızı ve OpenTelemetry ile neyi izlediğimizi anlatıyoruz."
publishDate: 2026-11-22
draft: true
translationKey: turklex-own-servers
---

Turklex, avukatlar ve hukuk büroları için geliştirdiğimiz yapay zekâ destekli hukuk platformu. Backend'i Kotlin ile yazıldı ve JVM 21 üzerinde Quarkus ile çalışıyor. Veri PostgreSQL'de, tam metin araması Elasticsearch'te, vektör araması Qdrant'ta duruyor. Kuyruklar için RabbitMQ, oturum ve cache için Redis, dosyalar için S3 uyumlu SeaweedFS kullanıyoruz.

Bu servislerin hepsini kendi donanımımızda, Proxmox VE üzerindeki sanal makinelerde işletiyoruz. Yapay zekâ modellerine ise dış sağlayıcıların API'leri üzerinden erişiyoruz. Yani model çağrıları sunucularımızın dışına çıkıyor, uygulama ve veri katmanı içeride kalıyor.

## Ne nerede çalışıyor

Dev, sandbox ve prod olmak üzere üç ortamımız var ve her birinin stack tanımı repoda duruyor. Sandbox ile prod ayrı sanal makinelerde çalışıyor.

Her servis için ayrı bir Docker Compose dosyası yazıp bir ortamın stack'ini bu dosyaları bir araya getirerek kuruyoruz. Bir servisin imaj sürümü ya da ayarı böylece tek bir dosyada değişiyor.

Web tarafı başka bir yerde. React ile yazılan uygulama arayüzü ve turklex.ai sitesi statik dosyalar olarak Cloudflare Pages'ten sunuluyor. DNS de Cloudflare'da. Sandbox gibi herkese açık olmayan ortamlara Cloudflare Access üzerinden giriyoruz.

## Makineler Ansible'da, kaynaklar Terraform'da

İki aracı iki ayrı katman için kullanıyoruz.

Ansible makineleri ve üzerlerinde çalışanları yönetiyor: Proxmox host'u, sanal makineler, compose stack'leri, GitHub Actions runner'ları ve cloudflared. Sanal makinelerin kurulumu da playbook'larda tanımlı.

Terraform ise servislerin içini tanımlıyor. RabbitMQ kuyrukları, SeaweedFS bucket'ları, Elasticsearch index'leri ve Qdrant koleksiyonları Terraform'da. Cloudflare hesabı da öyle: DNS kayıtları ve zone ayarları, örneğin kabul edilen en düşük TLS sürümü, kodda yazılı.

Kullandığımız provider'lar cloudflare, rabbitmq, elasticstack, minio ve aws. Sonuncusu AWS'ye bağlanmıyor. SeaweedFS bir S3 API'si sunduğu için aws provider'ını SeaweedFS'in S3 adresine yönlendiriyoruz. Terraform state'i de S3 uyumlu uzak bir depoda tutuluyor.

Prod için bir güvenlik kuralımız var. CI, prod ortamı için `terraform plan` çalıştırır ve plan herhangi bir kaynağı silecekse iş başarısız olur. Plan CI'da çıktığı, `apply` de elle yapıldığı için bir kuyruğu ya da index'i silen değişiklik fark edilmeden canlıya gidemez.

## Yayın: GitHub Actions ve ortam başına runner

Her pull request'te şu kontroller çalışıyor:

- Backend için ktlint, derleme, imaj derlemesi ve stack dosyalarının kontrolü.
- Uygulama arayüzü için bağımlılık kurulumu ve derleme.
- turklex.ai sitesi için lint, format kontrolü, tip kontrolü ve derleme.
- Prod, sandbox ve Cloudflare için Terraform fmt, validate ve plan.

Deploy işleri, her ortama ayrılmış ve her biri ayrı bir sanal makinede duran kendi runner'larımızda çalışıyor. Prod'a çıkan iş prod'un runner'ında koşuyor.

`main` dalına birleşen her değişiklik sandbox'a çıkıyor. Prod'a yayın `main` üzerinden elle başlatılıyor ve GitHub'daki `production` ortamının onayından geçiyor. Prod'a giden kod, aynı daldan beslenen sandbox'ta daha önce çalışmış oluyor.

Backend imajları GitHub Container Registry'de (GHCR) tutuluyor. Parola ve anahtar gibi gizli bilgileri repoya koymayıp GitHub secrets ve `TF_VAR_` ile başlayan ortam değişkenleriyle veriyoruz.

Issue, branch, pull request ve squash commit aynı issue numarasını taşıyor. Canlıdaki bir değişikliğin neden yapıldığını commit'ten issue'ya giderek bulabiliyoruz.

## İzleme: OpenTelemetry, metrikler ve loglar

Backend üç tür sinyal üretiyor. Trace'leri Quarkus'un OpenTelemetry eklentisi, metrikleri Micrometer'ın Prometheus kaydı üretiyor. Loglar stdout'a JSON olarak yazılıyor.

Hypervisor'da, sanal makinelerde ve runner'da çalışan Grafana Alloy topladığı veriyi yalnızca dışarı gönderiyor (push). Metrikler Prometheus'a, loglar Loki'ye, trace'ler Tempo'ya gidiyor ve hepsine Grafana'dan bakıyoruz.

Veri gelmemesi de alarm üretiyor. Bir sunucu ya da toplayıcı veri göndermeyi bırakırsa panolar sessizleşir ve sessiz bir pano "her şey yolunda" gibi görünür. Verinin yokluğuna bakan kural bu durumu yakalamak için var.

Dashboard'lar ve alarm kuralları da repoda kod olarak duruyor. Dashboard JSON'larını elle düzenlemiyor, kendi testleri olan bir Python betiğiyle üretiyoruz. Backend, kullanım, PostgreSQL, Elasticsearch, Qdrant, RabbitMQ, Redis, SeaweedFS, Tika ve host için ayrı panolar var. Alarm kuralları YAML dosyalarında tutuluyor.

## Yedekler

PostgreSQL yedeklerini pgBackRest ile alıyoruz. WAL arşivi sürekli gidiyor, haftada bir tam yedek, her gece de fark yedeği alınıyor. Bu yedekler sunucunun dışındaki S3 uyumlu bir depoda duruyor. Kullanıcıların yüklediği dosyalar da sürümlemesi açık, sunucu dışındaki bir bucket'a aktarılıyor.

Mevzuat ve içtihat külliyatını ve arama index'lerini yedeklemiyoruz, çünkü bunlar kaynağından yeniden üretilebiliyor. Hem yeniden üretme hem de geri yükleme adımları runbook olarak yazılı.

## Bu düzenin bedeli

Kendi donanımında çalışmak, bulut sağlayıcısının yaptığı işleri üstlenmek demek. Disk, işletim sistemi güncellemesi, kapasite planı ve donanım arızası bizim sorumluluğumuzda. Yönetilen bir veritabanı hizmeti kullanmadığımız için PostgreSQL'in yedeğini ve sürüm yükseltmesini de biz planlıyoruz.

Bu yüzden aynı düzeni her müşteriye önermiyoruz. Ekibinde altyapıyla ilgilenecek kimse olmayan bir şirket için yönetilen bir bulut hizmeti çoğu zaman daha doğru seçim.

Kendi sisteminiz için benzer bir yayın ve izleme düzeni kurmak istiyorsanız [DevOps ve altyapı yönetimi](/hizmetler/devops-ve-altyapi-yonetimi/) sayfasında nasıl çalıştığımızı anlattık. Turklex'in ne yaptığı ve hangi teknolojilerle yazıldığı [Turklex sayfasında](/urunler/turklex/).
