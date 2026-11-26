# Yayından önce sahibinin kararı gereken maddeler

Sitede yer tutucu yok. Bilgisi eksik cümleler o bilgiye ihtiyaç duymayacak şekilde yazıldı ya da
çıkarıldı. Aşağıdakiler ya sitede şu an yazan ve onay bekleyen ifadeler ya da eklenmesi için sizden
bilgi gereken konular.

## 1. Sitede yazan, doğrulanması gerekenler

### Şirket

- **Kuruluş tarihi "Eylül 2024"** (`about.ts`). Kaynağı yalnızca iç dokümanlar.
- **`info@imotek.tr`** okunan bir posta kutusu mu? Footer, iletişim sayfası ve tüm çağrılar bu adrese gidiyor.
- **Telefon +90 312 963 03 09** Turklex'in ürün hattı. Kurumsal site için de bu numara kullanılabilir mi?
- **TÜBİTAK 1507 desteği** hakkımızda ve Turklex sayfasında geçiyor. Yazılması uygun mu?
- **"İlk yanıtımızda işin bize uygun olup olmadığını söyleriz"** sözü (nasıl çalışıyoruz, iletişim).

### Çalışma biçimi (`howWeWork.ts`, hizmetlerdeki `process` adımları)

Yazılı kapsam, testli küçük pull request'ler, önce test ortamı, kod ve işletme belgesiyle devir, ek
işler için ayrı yazılı kapsam. Müşteri işlerinde gerçekten böyle çalışıldığını onaylayın.

### Hizmetler (`services.ts`)

- **AWS:** ayrı hesaplar, ECS veya EC2, RDS, önce deneme taşıması ve geri dönüş yolu, başlamadan
  AWS Pricing Calculator ile maliyet tahmini. Bu yöntemlerle çalıştığınızı doğrulayın.
- **Java / Spring Boot:** reponuzda Spring ile yapılmış iş görünmüyor. Hizmet olarak sunuluyor, onaylayın.
- **Backend ve arayüz kapsamı:** "Backend'i yalnızca JVM'de, arayüzü yalnızca React ile yazıyoruz"
  cümleleri hizmetler sayfasından, nasıl çalışıyoruz sayfasından ve Java/React hizmet sayfalarından
  kaldırıldı; yerine teknolojiler sayfasına yönlendiren cümleler geldi. Go, Python ya da Node.js için
  ayrı bir hizmet sayfası ister misiniz?
- **Frontend:** UI/UX tasarımı da veriyor musunuz? Chrome eklentisi geliştirme bu hizmetin altında anlatılıyor.
- **Mobil:** mağaza hesaplarının müşteri adına açılması önerisi, kapsam yazılınca tahmin verilmesi, yayın sonrası bakım.
- **Mimari:** tasarım belgesinin içeriği; "Turklex'in backend'i tek bir uygulama" ifadesi.
- **DevOps:** Turklex'in iç uygulamaları sayfada yazıyor (Terraform'un üretim kaynağı silmesine karşı
  koruma, gece site dışı yedek, üretim ve testin ayrı makinelerde olması, kurulumda bir geri yükleme testi).

### Turklex sayfası (`product.ts`)

- Veri konumu SSS'i: "veriler Türkiye'de, yapay zekâ işlemleri yurt dışındaki sağlayıcılarda".
- SSS'teki aranan kaynak listesi bağlayıcı sayfasından alındı; uygulama da aynı kaynakları mı arıyor?
- Deneme süresi yazılmadı, yalnızca deneme olduğu söyleniyor.

### Teknolojiler (`content-data/technologies.ts`)

- Liste sizin isteğinizle 78 araca ve 10 gruba çıktı: diller, backend, web arayüzü, mobil, veri,
  bulut, DevOps, izleme, test, yapay zekâ. Sayfa "bunlarla çalışıyoruz" diyor; müşteri listedeki her
  araç için size yazabilir. Repoda kanıtı olanlar Java, Kotlin, TypeScript, Quarkus, React, Vite,
  Astro, Tailwind, PostgreSQL, Redis, Elasticsearch, Qdrant, RabbitMQ, Docker, Terraform, Ansible,
  GitHub Actions, OpenTelemetry, Grafana, Proxmox, Cloudflare, Capacitor, Testcontainers,
  LangChain4j ve MCP. Geri kalanını desteklemek istemiyorsanız `technologies.ts`'ten satırını silin.
- Grup metinleri de bu listeye göre yazıldı: mobilde "React Native ya da Flutter, platforma özel
  kısımda Swift ve Kotlin", web arayüzünde "Vue ya da Angular ile yazılmışsa onunla devam ediyoruz",
  bulutta "sağlayıcıyı maliyete ve verinin hangi ülkede durması gerektiğine bakarak seçiyoruz".
- LangChain4j ve Testcontainers'ın ikon setlerinde logosu yok, genel simge kullanıldı.

### Yasal metinler (`legal.ts`)

Gizlilik politikası ve kullanım koşulları sitenin gerçekte yaptığına göre yazıldı (analitik yok,
çerez yok, tema tercihi tarayıcıda, Cloudflare barındırma, e-postayla başvuru, KVKK md. 11).
**Bir hukukçunun okuması şart.** Hukukçu için açık sorular: e-postaların saklama süresi, e-posta
sağlayıcısı ve Cloudflare kaynaklı yurt dışı aktarım, KVKK başvurusunun şekli, uygulanacak hukuk.
Cloudflare Web Analytics ve Bot Fight Mode kapalı kalmalı; açılırsa gizlilik metni değişmeli.

## 2. Sizden bilgi gereken konular

- **Mobil teknoloji:** teknolojiler sayfasında artık Mobil grubu var (React Native, Expo, Flutter,
  Swift, Android, Capacitor). Mobil hizmet sayfasında teknoloji rozeti yok; hangilerinin orada
  görüneceğini söyleyin.
- **Çalışma şartları:** ücretlendirme modeli, ilk yanıt süresi, kodun ve hesapların sahipliği,
  devirden sonraki destek ve bakım. Müşteri logosu olmadığı için en güçlü güven kanıtı bunlar.
- **Ekip:** hakkımızda sayfasında isim, rol ve geçmiş yer alsın mı?
- **Var olan ya da yarım kalmış projeleri** devralıyor musunuz?
- **SSS:** frontend ve mobil sayfalarında SSS az; müşterilerin sık sorduğu sorular varsa ekleyelim.
- **Sosyal profiller:** LinkedIn, GitHub, X. Hiçbiri bağlı değil, JSON-LD `sameAs` boş.
- **Logo, favicon, paylaşım görseli:** şu an geçici bir "I" monogramı
  (`src/assets/favicons/`, `public/logo.png`, `src/assets/images/og-default.png`). Dile özel
  paylaşım görseli yok.
- **Vergi dairesi / numarası**, künyede görünmesini istiyorsanız.
- **turklex.ai'dan imotek.tr'ye bağlantı:** turklex.ai IMOTEK'in adını anmıyor; iki site birbirine
  bağlanırsa arama motorları için şirket–ürün ilişkisi netleşir.

## 3. Blog taslakları (yayında değil, `draft: true`)

- `src/content/post/tr/turklexi-kendi-sunucularimizda-nasil-isletiyoruz.md` + EN karşılığı
- `src/content/post/tr/kotlin-ve-quarkus-ile-backend.md` + EN karşılığı

İkisi de iç altyapı ayrıntısı içeriyor (Proxmox, ortam başına sanal makine, yedekleme düzeni, GHCR,
Cloudflare Access, özel Tika imajı). Okuyup onaylayınca `draft: true` satırını silin. İkinci yazı
birinciye bağlantı verdiği için ikisi birlikte yayınlanmalı. Yazar alanı boş.

## 4. Teknik işler

- **Cloudflare Pages:** `imotek-website` projesini oluşturun, repoya `CLOUDFLARE_API_TOKEN` ve
  `CLOUDFLARE_ACCOUNT_ID` secret'larını ekleyin, `imotek.tr` alan adını bağlayın, `www` → apex
  yönlendirme kuralı ekleyin (`_redirects` ile yapılamıyor).
- **Cloudflare'in yönetilen robots.txt'i** şu an canlıda GPTBot, ClaudeBot ve Google-Extended'ı
  engelliyor ve sitenin kendi robots.txt'inin başına ekleniyor. Yapay zekâ aramalarında görünmek için
  panelden kapatın.
- **İlk deploy sonrası kontrol:** `/en/` altında olmayan bir adres `/en/404.html` ile 404 dönüyor mu;
  `*.pages.dev` önizlemeleri `X-Robots-Tag: noindex` taşıyor mu.
- **Search Console ve Bing Webmaster** doğrulaması kurulmadı (şablonun Google doğrulama kodu silindi).
- **Content-Security-Policy** başlığı yok; tema renk modu için satır içi script kullanıyor.
- **Eski siteden yönlendirme** yok; eski site tek sayfaydı. Search Console eski adres gösterirse 301 eklenir.
