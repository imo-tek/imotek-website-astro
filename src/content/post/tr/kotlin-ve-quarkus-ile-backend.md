---
title: "Kotlin ve Quarkus ile backend: Turklex'ten notlar"
excerpt: "Turklex'in backend'i Kotlin ile yazıldı ve Quarkus ile çalışıyor. Hangi Quarkus eklentisini ne için kullandığımızı, testleri nasıl kurduğumuzu ve Spring Boot'u hangi durumda önerdiğimizi anlatıyoruz."
publishDate: 2026-11-22
draft: true
translationKey: kotlin-quarkus-backend
---

Turklex'in backend'i Kotlin ile yazıldı ve JVM 21 üzerinde Quarkus ile çalışıyor. Bu yazıyı yazarken sürümler Kotlin 2.4, Quarkus 3.39 ve Gradle 9. Backend'in ana kaynak kümesinde Java dosyası yok. Spring Boot da yok.

Turklex'in ne olduğunu bilmeyenler için kısaca: avukatlar ve hukuk büroları için geliştirdiğimiz bir hukuk platformu. Backend mevzuat ve içtihat aramasını, belge işlemeyi, dava kayıtlarını ve yapay zekâ asistanının çağrılarını yönetiyor.

## Quarkus'tan neleri kullanıyoruz

Uygulamanın iskeleti Quarkus'un standart eklentilerinden oluşuyor.

- REST endpoint'leri Quarkus'un REST eklentisiyle yazıldı ve her kaynak grubu kendi `...Resource.kt` sınıfında duruyor.
- Bağımlılık enjeksiyonunu Arc, yani Quarkus'un CDI uygulaması yapıyor.
- Zamanlanmış işler için scheduler, sağlık kontrolleri için health eklentisi kullanılıyor, dış servis çağrılarındaki zaman aşımı ve yeniden deneme kuralları da fault tolerance eklentisinde tanımlı.
- Veritabanına Hibernate ORM with Panache'ın Kotlin modülüyle erişiyoruz. Şema değişikliklerinin hepsi, bugün sayısı yüzü geçen Flyway migration dosyaları olarak repoda duruyor.
- Kimlik doğrulama Quarkus OIDC ve Security JPA ile kuruldu. Claude ve ChatGPT bağlayıcısının oturum açabilmesi için backend içinde kendi OAuth sunucusu paketimiz var.
- Uzun süren işleri istekten ayırıp SmallRye Reactive Messaging'in AMQP bağlayıcısıyla RabbitMQ kuyruklarına bırakıyoruz. Belge işleme, tebligatların okunması ve mevzuat külliyatının eşitlenmesi ayrı kuyruklarda yürüyor.
- Claude ve ChatGPT bağlayıcısının arkasındaki MCP sunucusu Quarkus'un MCP Server eklentisiyle yazıldı. Bağlayıcının tek yetkisi mevzuat ve içtihat araması. Büronun dosyalarını göremiyor.
- Kullanıcıya, büroya ya da pakete göre açılıp kapanan özellikleri Quarkus Flags ile yönetiyoruz.
- Yapay zekâ modellerine yapılan çağrılar LangChain4j'nin Quarkus eklentisi üzerinden gidiyor.
- Trace için OpenTelemetry, metrik için Micrometer'ın Prometheus kaydı, log için JSON loglama eklentisi var. Bu sinyallerin nereye gittiğini [Turklex'i kendi sunucularımızda nasıl işlettiğimizi anlattığımız yazıda](/blog/turklexi-kendi-sunucularimizda-nasil-isletiyoruz/) yazdık.

## Kotlin ile Quarkus

Quarkus Kotlin'i destekliyor ama dilin bir varsayılanı framework'le çatışıyor. Kotlin'de sınıflar varsayılan olarak final. CDI ve Hibernate ise bazı sınıflardan alt sınıf (proxy) üretebilmek ister. Quarkus'un Kotlin rehberi bu yüzden Gradle'da allopen eklentisini kullanmayı ve proxy gereken anotasyonları bu eklentiye tanıtmayı önerir.

Panache'ın Kotlin için ayrı bir modülü var. Java sürümünde entity sınıfının statik metotlarıyla yazılan sorgular, Turklex'in de kullandığı bu modülde companion object üzerinden yazılıyor.

Kod stilini ktlint denetliyor. Gradle eklentisi olarak çalıştığı için stil hatası olan kodda build başarısız oluyor ve bu kontrol her pull request'te CI'da da çalışıyor.

## Testler

Testlerin kurulumu birkaç kurala dayanıyor:

- Backend testleri Redis ve RabbitMQ'yu Testcontainers ile kendi container'larında başlatıyor. Testler mock yerine bu gerçek servislerle konuşuyor.
- Test çalıştırması dört paralel fork'a bölünüyor.
- Canlı üçüncü taraf sunuculara giden testler etiketleniyor ve varsayılan build'den çıkarılıyor. Dış bir servis yanıt vermediğinde CI bu yüzden kırmızıya dönmüyor.
- TDD repoda yazılı bir kural. Önce başarısız olan test yazılıyor, sonra onu geçiren kod.

CI'daki backend işi ktlint, derleme, imaj derlemesi ve stack dosyası kontrolünden oluşuyor.

## Quarkus dışında kalanlar

Her parça bir Quarkus eklentisinden gelmiyor. PDF'leri bölmek için Apache PDFBox'ı, rapor üretmek için openhtmltopdf'i kullanıyoruz. Belgelerden metin çıkarma ve OCR işini ayrı bir container'da çalışan Apache Tika yapıyor. Tika'nın Türkçe için hazırlanmış imajını repoda kendimiz derliyoruz. Parola kurallarını da Passay ile sunucu tarafında uyguluyoruz.

Bunlar düz Java kütüphaneleri. Spring Boot ile yazılmış bir projeye de aynı şekilde eklenirler, framework seçimi onları etkilemez.

## Derleme ve çalışma

Gradle 9 ile derlenen backend, UBI9 tabanlı OpenJDK 21 imajının üzerine kurulan bir container içinde JVM üzerinde çalışıyor. Quarkus GraalVM ile native imaj da üretebiliyor, Turklex şu an JVM modunda.

Ayarlar 12-factor kuralına göre ortam değişkenlerinden okunuyor. Bu da repoda yazılı kurallardan biri. Parola ve anahtar gibi gizli bilgiler repoda tutulmuyor.

## Spring Boot'u ne zaman öneriyoruz

Müşteri işlerinde framework seçimini çoğu zaman ekibin bildiği belirliyor. Ekibiniz Spring biliyorsa ya da mevcut kod Spring Boot ile yazılmışsa Spring Boot ile devam etmeyi öneriyoruz. Java dünyasında en yaygın framework o, ekibe yeni katılacak birinin onu biliyor olma ihtimali de yüksek.

Quarkus'u, yeni bir servisin container içinde çalışacağı ve açılış süresiyle bellek kullanımının önemli olduğu durumlarda öneriyoruz. Quarkus ayarların ve bağımlılık enjeksiyonunun büyük kısmını derleme sırasında çözdüğü için uygulama açılırken yapılacak iş azalıyor.

İki framework de Hibernate ve Micrometer gibi aynı kütüphanelerle çalışabildiğinden birinden ötekine geçen bir geliştirici tanıdık bir ortam buluyor. Fark çoğunlukla ayarlarda ve anotasyonlarda. Turklex'te Spring Boot olmadığı için Spring Boot hizmetimizde Turklex'i örnek göstermiyoruz.

JVM üzerinde çalışacak bir API ya da servis yazdırmayı düşünüyorsanız [Java backend geliştirme](/hizmetler/java-backend-gelistirme/) sayfasında nasıl çalıştığımızı anlattık.
