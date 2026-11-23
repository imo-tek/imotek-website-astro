import type { Service } from '../types';

/**
 * Hizmetler. Altı kaydın hepsi aynı alanlarla, aynı derinlikte yazıldı.
 * Sıra, ana sayfadaki ve hizmetler sayfasındaki kart sırasını belirler.
 * URL'ler `src/i18n/routes.ts` içindedir; burada slug yoktur.
 */
export const services: Service[] = [
  {
    key: 'backend',
    navTitle: 'Java backend geliştirme',
    title: 'Java backend geliştirme',
    summary:
      'Uygulamanızın sunucu tarafını Java ya da Kotlin ile yazıyoruz. API, veritabanı şeması, kuyruklar ve dış sistem entegrasyonları bu işin içinde.',
    chooseIf: 'Bir API ya da servis yazılacaksa ve bunun JVM üzerinde çalışmasını istiyorsanız.',
    seo: {
      title: 'Java backend geliştirme: Spring Boot ve Quarkus',
      description:
        "Java ve Kotlin ile API ve dış sistem entegrasyonları yazıyoruz. Spring Boot ya da Quarkus kullanıyor, veriyi PostgreSQL'de tutuyoruz. Projenizi anlatın.",
    },
    intro: [
      'Backend, uygulamanın kullanıcıya görünmeyen tarafı. İş kuralları ve veri burada durur. Ödeme ya da SMS servisi gibi dış sistemlerle konuşan kod da bu tarafta.',
      'Bu tarafı JVM üzerinde Java ya da Kotlin ile yazıyor, framework olarak Spring Boot ya da Quarkus kullanıyoruz. Hangisini seçeceğimiz ekibinizin bildiğine ve sistemin nerede çalışacağına bağlı.',
      "Kendi ürünümüz Turklex'in backend'ini Kotlin ve Quarkus ile yazdık. PostgreSQL, Elasticsearch, RabbitMQ ve Redis ile birlikte çalışıyor. Turklex'te Spring Boot yok. Spring Boot'u ise Java ekiplerinin çoğu onu bildiği için öneriyoruz.",
    ],
    whatWeDo: [
      {
        title: 'REST API tasarımı ve geliştirmesi',
        text: "Endpoint'leri ve hata yanıtlarını kod yazmadan önce bir sözleşmeye döküyoruz. Web ve mobil tarafı, API bitmeden bu sözleşmeye göre çalışmaya başlayabiliyor.",
      },
      {
        title: "Veritabanı şeması ve migration'lar",
        text: 'Şemayı PostgreSQL üzerinde tasarlıyoruz. Her değişiklik sürüm kontrolünde duran bir migration dosyasıyla yapıldığı için test ortamı da canlı ortam da aynı adımlardan geçiyor.',
      },
      {
        title: 'Arka plan işleri ve kuyruklar',
        text: 'Dosya işleme ya da rapor üretimi gibi uzun süren işleri istekten ayırıp kuyruğa alıyoruz. Bunun için RabbitMQ kullanıyoruz.',
      },
      {
        title: 'Dış sistem entegrasyonları',
        text: 'Ödeme, SMS ve e-posta servisleriyle entegrasyonları yazarken karşı tarafın yanıt vermediği durumu, yani zaman aşımını ve yeniden denemeyi baştan tasarlıyoruz.',
      },
      {
        title: 'Arama',
        text: 'Veritabanı sorgusunun yetmediği yerde Elasticsearch ile tam metin araması, Qdrant ile vektör araması kuruyoruz.',
      },
      {
        title: 'Testler',
        text: "Kodu testleriyle birlikte yazıyoruz. Testler her pull request'te otomatik çalışıyor.",
      },
    ],
    goodFit: [
      'Web ya da mobil uygulamanız için bir API yazılacak.',
      'Onay akışı, yetkilendirme, para ya da stok hareketi gibi tutarlılığın önemli olduğu işlemler var.',
      'Sistem yıllarca yaşayacak ve üzerinde birden fazla kişi çalışacak.',
      'Ekibiniz Java ya da Kotlin biliyor ve aynı dilde devam etmek istiyorsunuz.',
    ],
    notFit: [
      "Birkaç haftada denenip belki de bırakılacak bir prototip yapıyorsunuz. JVM'in getirdiği düzen bu ölçekte yük olur. Daha hafif bir araç işinizi görür.",
      'İçerik ağırlıklı bir tanıtım sitesi istiyorsunuz. Bunun için backend yazmaya gerek yok, statik bir site yeter.',
      'Ekibiniz Go ya da Python gibi başka bir dilde çalışıyor ve öyle kalmak istiyor. O zaman yeni servisi de o dilde yazmak daha doğru olur.',
    ],
    techKeys: [
      'java',
      'kotlin',
      'spring-boot',
      'quarkus',
      'postgresql',
      'rabbitmq',
      'redis',
      'elasticsearch',
      'qdrant',
      'langchain4j',
      'mcp',
    ],
    process: [
      {
        title: 'İlk görüşme',
        text: 'Sistemin ne yapması gerektiğini ve hangi sistemlerle konuşacağını soruyoruz. Mevcut kod ya da veri varsa ona da bakıyoruz.',
      },
      {
        title: 'Kapsam ve tasarım',
        text: 'API sözleşmesini ve veri modelini yazıyoruz. Neyin bu işe dahil olduğu, neyin olmadığı aynı belgede duruyor.',
      },
      {
        title: 'Geliştirme',
        text: 'Küçük parçalar halinde ilerliyoruz. Her parça testleriyle birlikte bir pull request olarak açılıyor ve test ortamına çıkıyor.',
      },
      {
        title: 'Yayına alma',
        text: 'Canlı ortam ve izleme bu adımda kuruluyor. Altyapı tarafı ayrı bir iş olarak da yürütülebilir.',
      },
      {
        title: 'Devir',
        text: 'Kodun nasıl derlenip yayına alındığını yazıyor, ekibinizle üzerinden geçiyoruz.',
      },
    ],
    faqs: [
      {
        q: 'Spring Boot mu, Quarkus mu?',
        a: 'Ekibiniz Spring biliyorsa ya da mevcut kod Spring ise Spring Boot. Yeni bir servis container içinde çalışacaksa ve hızlı açılış ile düşük bellek kullanımı önemliyse Quarkus öneriyoruz. İkisi de aynı JVM kütüphanelerini kullandığı için karar çoğu zaman ekibin alışkanlığına kalıyor.',
      },
      {
        q: 'Java mı, Kotlin mi?',
        a: "İkisi aynı JVM üzerinde çalışır ve aynı kütüphaneleri kullanır. Ekibiniz Java yazıyorsa Java ile devam ederiz. Yeni bir projede seçim bize bırakılırsa Kotlin'i tercih ediyoruz. Turklex'in backend'i de Kotlin.",
      },
      {
        q: 'Hangi Java sürümüyle çalışıyorsunuz?',
        a: 'Yeni projelere güncel bir LTS sürümüyle başlıyoruz. Turklex JVM 21 üzerinde çalışıyor. Eski bir sürümde kalmış projelerde sürüm yükseltme ayrı bir iş olarak planlanır.',
      },
      {
        q: 'Arayüzü kendi ekibimiz yazıyor. Yalnızca backend için çalışabilir misiniz?',
        a: "Evet. Bu durumda işe API sözleşmesiyle başlıyoruz. Ekibiniz arayüzü bu sözleşmeye göre geliştirirken biz backend'i yazıyoruz.",
      },
    ],
    relatedKeys: ['architecture', 'ops', 'frontend'],
  },
  {
    key: 'frontend',
    navTitle: 'React web arayüzleri',
    title: 'React web arayüzleri',
    summary:
      "Yönetim paneli ve form gibi veriyle çalışılan ekranları React ve TypeScript ile yazıp backend API'sine bağlıyoruz.",
    chooseIf:
      'İnsanların giriş yapıp gün boyu kayıt girdiği ya da aradığı bir web uygulamasının ekranları yazılacaksa.',
    seo: {
      title: 'React web uygulaması geliştirme: yönetim panelleri',
      description:
        "Yönetim paneli, form ve veri ekranlarını React ve TypeScript ile yazıp API'nize bağlıyoruz. Turklex'in web uygulaması da böyle yazıldı. Projenizi anlatın.",
    },
    intro: [
      'Web uygulamasında kullanıcının günü listelerde ve formlarda geçer. Bu ekranlar yavaş açılıyorsa ya da hatalı veriyi kabul ediyorsa, bunu her gün o ekranı kullanan kişi yaşar.',
      "Bu ekranları React ve TypeScript ile yazıp backend API'sine bağlıyoruz. API'den gelen verinin tipleri TypeScript'te tanımlı olduğu için bir alanın adı değiştiğinde hata kullanıcıya ulaşmadan, derleme sırasında görünür.",
      "Turklex'in web uygulamasını React, TypeScript ve Vite ile yazdık. Avukatların dava kayıtları ve dilekçelerin düzenlendiği belge editörü bu arayüzde.",
    ],
    whatWeDo: [
      {
        title: 'Yönetim panelleri ve listeler',
        text: 'Filtrelenip sıralanabilen tabloları yazıyoruz. Kayıt sayısı büyüdüğünde filtrelemeyi ve sayfalamayı sunucuya bırakıyoruz, tarayıcıya yalnızca ekrandaki sayfa geliyor.',
      },
      {
        title: 'Formlar',
        text: 'Çok adımlı formları ve alan doğrulamalarını yazıyoruz. Tarayıcıdaki kontrol kullanıcıya hemen geri bildirim vermek için var. Asıl kontrolü backend yapıyor.',
      },
      {
        title: 'API bağlantısı',
        text: "Her ekranın yükleniyor, hata ve boş hâlini de yazıyoruz. API'den gelen veriyi önbellekte tutuyoruz. Ekranlar arasında gidip gelirken aynı istek tekrar tekrar gitmiyor.",
      },
      {
        title: 'Belge görüntüleme ve dışa aktarma',
        text: "Turklex'te PDF ve Word dosyaları tarayıcıda açılıyor, TipTap üzerinde çalışan editörde hazırlanan metin PDF ya da DOCX olarak indiriliyor.",
      },
      {
        title: 'Chrome uzantıları',
        text: "Turklex'in Chrome uzantısını biz yazdık. Avukat aktarımı kendisi başlatıyor, uzantı da UYAP Avukat Portalı'ndaki dava ve evrak bilgisini Turklex'e taşıyor.",
      },
      {
        title: 'Testler',
        text: 'Bir formun yanlış veriyi reddettiğini ya da yetkisi olmayan kullanıcının bir butonu görmediğini testle doğruluyoruz. Bu testleri Vitest ve Testing Library ile yazıyoruz.',
      },
      {
        title: 'Derleme ve yayın',
        text: "Vite'ın derlediği arayüz statik dosyalardan oluşur. Bu dosyaları Cloudflare Pages'te ya da sizin sunucunuzda yayınlıyoruz. Turklex'in web uygulaması Cloudflare Pages'te duruyor.",
      },
    ],
    goodFit: [
      'Ekibiniz ya da müşterileriniz gün boyu aynı ekranlarda kayıt girip arıyor.',
      "Excel'de yürüyen bir işi tarayıcıda çalışan bir uygulamaya taşımak istiyorsunuz.",
      'API hazır ya da yazılıyor ama arayüzü yazacak kimse yok.',
      'Kullanıcılarınız uygulamanın içinde PDF ya da Word belgesi açıp üzerinde çalışacak.',
    ],
    notFit: [
      'Yalnızca tanıtım sitesi ya da blog istiyorsunuz. Bunun için React uygulaması gerekmez. Böyle siteleri Astro ile yapıyoruz, bu site de onlardan biri.',
      "Arayüzünüz Vue ya da Angular ile yazılmış ve öyle kalacak. React'e geçmek yerine aynı framework'le devam etmek daha doğru olur.",
    ],
    techKeys: ['react', 'typescript', 'vite', 'astro', 'tailwind-css', 'cloudflare'],
    process: [
      {
        title: 'Ekran listesi',
        text: "Ekranları ve her ekranın API'den hangi veriyi beklediğini bir listeye döküyoruz.",
      },
      {
        title: "API'yle karşılaştırma",
        text: "Bu listeyi mevcut API'yle karşılaştırıyoruz. Eksik endpoint'ler geliştirme başlamadan ortaya çıkıyor ve backend tarafına o aşamada iletiliyor.",
      },
      {
        title: 'Ekran ekran geliştirme',
        text: 'Ekranları teker teker bitiriyoruz. Her değişikliği yayından önce bir test adresinde açıp deneyebiliyorsunuz.',
      },
      {
        title: 'Yayın ve devir',
        text: 'Derlenen arayüzü yayına alıyor, nasıl derlenip yayınlandığını anlatan belgeyi ekibinize veriyoruz.',
      },
    ],
    faqs: [
      {
        q: 'React mı, Astro mu?',
        a: "Kullanıcılar giriş yapıp veriyle çalışıyorsa React. Sayfalar çoğunlukla okunmak için varsa Astro. İkisi yan yana da durabilir: turklex.ai Astro ile yazılı, avukatların giriş yaptığı app.turklex.ai ise React'le.",
      },
      {
        q: "Backend'imiz Java değil. Arayüzü yine de yazar mısınız?",
        a: "Evet. Arayüz backend'le HTTP üzerinden konuşur, backend'in hangi dilde yazıldığı arayüzü etkilemez. API'nin belgesi varsa ona göre çalışıyoruz. Yoksa işe endpoint'leri sizinle birlikte listeleyerek başlıyoruz.",
      },
      {
        q: 'Elimizde hazır bir tasarım yok. Ekranlar neye göre yapılacak?',
        a: "Tasarımınız varsa ona uyan bileşenleri yazıyoruz. Yoksa yönetim paneli gibi şirket içinde kullanılan ekranlarda hazır bir bileşen kütüphanesi işi hızlandırır. Turklex'te Ant Design kullanıyoruz.",
      },
    ],
    relatedKeys: ['backend', 'mobile', 'ops'],
  },
  {
    key: 'mobile',
    navTitle: 'Mobil uygulama geliştirme',
    title: 'Mobil uygulama geliştirme',
    summary:
      "iOS ve Android için mobil uygulama geliştiriyoruz. Uygulamanın konuştuğu API'yi de yazabilir ya da uygulamayı mevcut backend'inize bağlayabiliriz.",
    chooseIf: 'Ürününüz her gün telefondan açılacaksa ve telefonda düzgün çalışan bir web sayfası bu işi görmüyorsa.',
    seo: {
      title: 'Mobil uygulama geliştirme: iOS ve Android',
      description:
        "iOS ve Android uygulaması geliştiriyor, API'sini yazıyor ya da mevcut backend'inize bağlıyoruz. Mağaza başvurusu da işin içinde. Ne yapmak istediğinizi anlatın.",
    },
    intro: [
      "iOS ve Android için mobil uygulama geliştiriyoruz. Uygulamanın konuştuğu API'yi Java ya da Kotlin ile biz yazabiliriz, uygulamayı mevcut backend'inize de bağlayabiliriz. Bir web uygulamanız varsa çoğu zaman aynı API ikisine birden hizmet eder.",
      "Mobilde her yeni sürüm, kullanıcıya ulaşmadan önce Apple'ın ve Google'ın incelemesinden geçer. Kullanıcı güncellemediği sürece eski sürüm telefonda çalışmaya devam eder. API'yi bu yüzden eski sürümleri bozmadan değiştirmek gerekir. Bildirimler de iki şirketin kendi bildirim servisleri üzerinden gider.",
    ],
    whatWeDo: [
      {
        title: 'İlk sürümün kapsamı',
        text: 'İlk sürümde hangi ekranların olacağını ve telefonun hangi özelliklerinin kullanılacağını sizinle belirliyoruz. Sonraya kalanlar ayrı bir listede duruyor.',
      },
      {
        title: 'iOS ve Android uygulaması',
        text: 'Uygulamayı iki platform için de yazıyoruz. Ekran boyutu ya da telefonun yazı büyüklüğü ayarı değiştiğinde ekranların nasıl görüneceğini baştan hesaba katıyoruz.',
      },
      {
        title: 'Oturum',
        text: "Kullanıcı bir kez giriş yapar, oturum bilgisi telefonun güvenli deposunda saklanır: iOS'ta Keychain, Android'de Keystore. Süresi dolan oturum kullanıcıyı uğraştırmadan yenilenir.",
      },
      {
        title: 'Bildirimler',
        text: "Bildirimi backend gönderir, Apple'ın ve Google'ın servisleri telefona ulaştırır. Backend'de cihaz kayıtlarını tutan ve kime ne gideceğine karar veren kısmı da biz yazıyoruz.",
      },
      {
        title: 'Sürüm uyumluluğu',
        text: "API'deki değişiklikleri eski uygulama sürümlerini bozmayacak şekilde yapıyoruz. Çok eski bir sürüm açıldığında kullanıcıyı mağazaya yönlendiren güncelleme ekranı ilk sürümde hazır oluyor.",
      },
      {
        title: 'Test sürümleri ve mağaza',
        text: "Geliştirme boyunca test sürümlerini TestFlight ve Google Play'in iç test kanalıyla paylaşıyoruz. Mağaza başvurusunda ekran görüntülerinin yanında iki mağazanın da istediği veri kullanım beyanını hazırlıyoruz.",
      },
    ],
    goodFit: [
      'Kullanıcılarınız uygulamayı her gün, belki günde birkaç kez açacak.',
      'Kamera ya da konum gibi telefon özellikleri işin merkezinde.',
      "Web uygulamanız ve API'niz var, yanına bir mobil uygulama eklenecek.",
      'Kullanıcıya hemen ulaşması gereken bildirimleriniz var.',
    ],
    notFit: [
      'Kullanıcılarınız ürünü ara sıra açıyor. Telefonda düzgün çalışan bir web uygulaması aynı işi daha az maliyetle görür, mağaza incelemesi de beklemez.',
      'Mevcut web sitenizi olduğu gibi bir uygulama kabuğuna koymak istiyorsunuz. Apple, bir web sitesini paketlemekten öteye geçmeyen uygulamaları mağazaya genellikle kabul etmiyor.',
    ],
    techKeys: [],
    process: [
      {
        title: 'Uygulama mı, web mi?',
        text: 'Kullanıcılarınızın ürünü ne sıklıkla açacağını ve telefonun hangi özelliklerine ihtiyaç olduğunu konuşuyoruz. Mobil uygulama gerekmiyorsa bunu bu adımda söylüyoruz.',
      },
      {
        title: 'Kapsam ve API',
        text: "İlk sürümün ekranlarını ve bu ekranların API'den ne istediğini yazıyoruz. Backend henüz yoksa onu da aynı plana alıyoruz.",
      },
      {
        title: 'Test sürümleri',
        text: 'Geliştirme boyunca uygulamayı kendi telefonunuzda kullanıyorsunuz. Geri bildiriminiz bir sonraki test sürümüne giriyor.',
      },
      {
        title: 'Mağaza başvurusu',
        text: 'Başvuruyu iki mağazaya da gönderiyor, inceleme sırasında gelen soruları yanıtlıyoruz.',
      },
      {
        title: 'Devir',
        text: 'Kodu ve yeni bir sürümün nasıl derlenip mağazaya gönderileceğini anlatan belgeyi ekibinize devrediyoruz.',
      },
    ],
    faqs: [
      {
        q: "Web uygulamamız var. Mobil uygulama aynı backend'i kullanabilir mi?",
        a: "Çoğu durumda evet, aynı API ikisine de hizmet eder. Mobil için genellikle iki ekleme gerekir: bildirim gönderilecek cihazların kaydını tutan bir endpoint ve API'yi eski uygulama sürümlerini bozmadan değiştirmenin bir yolu. Ne gerektiğini işe başlarken API'nize bakıp yazılı olarak bildiriyoruz.",
      },
      {
        q: 'Mağaza hesapları kimin adına açılmalı?',
        a: 'Şirketinizin adına açmanızı öneriyoruz. Uygulama mağazada hesap sahibinin adıyla görünür ve hesap sizdeyken uygulamanın mağazadaki kaydı da sizde kalır. Bizi hesaba ekip üyesi olarak eklersiniz.',
      },
      {
        q: 'Bir mobil uygulama ne kadara mal olur?',
        a: "Rakamı en çok ekran ve akış sayısı belirler. Backend'in hazır olup olmadığı, kamera ya da ödeme gibi özellikler ve bağlanılacak dış sistemler de süreyi değiştirir. İlk sürümün kapsamını yazdıktan sonra o kapsam için tahmin veriyoruz.",
      },
    ],
    relatedKeys: ['backend', 'frontend', 'architecture'],
  },
  {
    key: 'aws',
    navTitle: 'AWS bulut altyapısı',
    title: 'AWS bulut altyapısı',
    summary:
      "AWS'de hesap yapısını, ağı, sunucuları ve veritabanını Terraform koduyla kuruyoruz. Başka bir yerde çalışan uygulamaları da AWS'ye taşıyoruz.",
    chooseIf: "Uygulamanız AWS'ye taşınacaksa ya da AWS'de sıfırdan bir ortam kurulacaksa.",
    seo: {
      title: 'AWS danışmanlığı: altyapı kurulumu ve taşıma',
      description:
        "AWS'de hesap, ağ, sunucu ve veritabanı kuruyor, mevcut uygulamanızı AWS'ye taşıyoruz. Kurulumun tamamı Terraform koduyla tanımlı. Bugünkü durumunuzu anlatın.",
    },
    intro: [
      'AWS konsolundan birkaç tıklamayla sunucu açılabiliyor. Elle kurulan bir hesapta ise birkaç ay sonra hangi kaynağın ne için açıldığını ve ayda neye mal olduğunu bulmak zorlaşıyor.',
      "Bu yüzden AWS'deki her şeyi Terraform koduyla kuruyoruz: hesap ayarlarını, ağı, sunucuları, veritabanını ve erişim yetkilerini. Değişiklikler kodda yapıldığı için her biri bir pull request olarak incelenir. Aynı ortam başka bir hesapta yeniden kurulabilir.",
      'Uygulamanız bugün bir hosting firmasında ya da kendi sunucunuzda çalışıyorsa taşımayı da üstleniyoruz. Geçiş adımlarını ve bir sorun çıkarsa eski sisteme nasıl dönüleceğini işe başlamadan yazıyoruz.',
    ],
    whatWeDo: [
      {
        title: 'Hesaplar ve erişim yetkileri',
        text: 'Test ve canlı ortam için ayrı AWS hesapları açıp AWS Organizations altında topluyoruz. Ekipte herkes kendi kullanıcısıyla, işine yetecek kadar yetkiyle giriş yapıyor. Kök hesap günlük işte kullanılmıyor.',
      },
      {
        title: 'Ağ',
        text: "VPC'yi, alt ağları ve güvenlik gruplarını kuruyoruz. Veritabanı internetten erişilemeyen bir alt ağda duruyor. Dışarıya yalnızca uygulamanın önündeki load balancer açılıyor.",
      },
      {
        title: 'Uygulama ortamı',
        text: 'Uygulamayı Docker imajı olarak paketleyip ECS üzerinde ya da doğrudan EC2 sunucularında çalıştırıyoruz. Hangisinin seçileceği uygulamanın yapısına ve ekibinizin neyi işletebileceğine bağlı.',
      },
      {
        title: 'Veritabanı ve dosyalar',
        text: "Veritabanı için RDS for PostgreSQL öneriyoruz. Otomatik yedekleri ve saklama süresini kurulumda ayarlıyoruz. Kullanıcıların yüklediği dosyalar S3'te duruyor.",
      },
      {
        title: 'Taşıma',
        text: "Uygulamayı ve verisini bugün çalıştığı yerden AWS'ye taşıyoruz. Önce verinin bir kopyasıyla test ortamına deneme geçişi yapıyor, gerçek geçişin ne kadar süreceğini orada ölçüyoruz.",
      },
    ],
    goodFit: [
      "Uygulamanız bir hosting firmasında ya da kendi sunucunuzda çalışıyor ve AWS'ye taşınacak.",
      "Yeni bir ürün için AWS'de test ve canlı ortam kurulacak.",
      'Aynı ortamı birden fazla kez kurmanız gerekecek, örneğin her büyük müşteriniz için ayrı bir kurulum.',
      'Ekibiniz uygulamayı yazıyor ama AWS tarafını üstlenecek kimse yok.',
    ],
    notFit: [
      'Uygulamanız tek sunucuya sığıyor ve trafiğiniz yıl boyunca aşağı yukarı aynı. Sabit fiyatlı bir sanal sunucu daha ucuza gelir, işletmesi de daha kolay olur.',
      'Her ay aynı tutarda fatura istiyorsunuz. AWS kullandığınız kadar ücret alır, fatura da aydan aya değişir.',
    ],
    techKeys: ['aws', 'terraform', 'docker', 'postgresql'],
    process: [
      {
        title: 'Bugünkü durum',
        text: 'Uygulamanın nerede çalıştığına, nasıl yayına alındığına, ne kadar veri olduğuna ve bugün neye mal olduğuna bakıyoruz.',
      },
      {
        title: 'Hedef yapı ve maliyet tahmini',
        text: "AWS'de kurulacak yapıyı bir şemayla çiziyor, aylık maliyetini AWS Pricing Calculator ile tahmin ediyoruz. Geçiş adımları ve geri dönüş yolu aynı belgede.",
      },
      {
        title: 'Test ortamı',
        text: 'Altyapıyı önce test hesabında Terraform koduyla kuruyoruz. Uygulamanızı orada çalıştırıp deniyorsunuz.',
      },
      {
        title: 'Geçiş',
        text: 'Canlı ortamı aynı koddan kuruyor, veriyi taşıyıp alan adını yeni ortama çeviriyoruz. Eski sistem, geri dönmek gerekmeyeceği belli olana kadar kapatılmıyor.',
      },
      {
        title: 'Devir',
        text: 'Terraform kodunu ve ortamın nasıl değiştirileceğini anlatan belgeyi ekibinize devrediyoruz.',
      },
    ],
    faqs: [
      {
        q: "Neden Terraform? AWS'nin kendi araçları yok mu?",
        a: "Var, CloudFormation ve CDK. Terraform'la DNS ya da Cloudflare ayarları gibi AWS dışındaki kaynakları da aynı kodda tutabiliyoruz. Kendi altyapımızı da Terraform ile yönetiyoruz.",
      },
      {
        q: 'Taşıma sırasında sistem kapanır mı?',
        a: 'Genellikle kısa bir kesinti gerekir. Bu sürede eski sisteme yazma durdurulur, son veri kopyalanır ve alan adı yeni ortama çevrilir. Kesintinin ne kadar süreceğini deneme geçişinde ölçüyor, gerçek geçişi sizinle seçtiğimiz saatte yapıyoruz. Bir sorun çıkarsa eski sisteme dönmenin adımları planda yazılı.',
      },
      {
        q: 'Aylık AWS faturasını nasıl kontrol altında tutarız?',
        a: "Kaynakları ortama ve işe göre etiketliyoruz. Faturanın hangi kalemden geldiğini Cost Explorer'da bu etiketlere göre görebiliyorsunuz. AWS Budgets ile aylık bir sınır koyuyor, harcama sınıra yaklaşınca e-posta gidecek şekilde ayarlıyoruz.",
      },
      {
        q: "Turklex de AWS'de mi çalışıyor?",
        a: "Hayır, Turklex kendi sunucularımızda çalışıyor. Terraform ve Docker'ı orada da kullanıyoruz ama hesap yapısı, VPC ya da RDS gibi AWS'ye özgü kurulumlar Turklex'te yok.",
      },
    ],
    relatedKeys: ['ops', 'architecture', 'backend'],
  },
  {
    key: 'architecture',
    navTitle: 'Sistem tasarımı ve mimari',
    title: 'Sistem tasarımı ve mimari',
    summary:
      'Kod yazılmadan önce sistemin nasıl kurulacağına sizinle karar veriyor, kararları gerekçeleriyle yazıyoruz. Çalışan sistemleri de inceleyip raporluyoruz.',
    chooseIf:
      'Yeni bir sisteme başlamadan önce kararları yazılı görmek ya da çalışan bir sistemin neden zorlandığını öğrenmek istiyorsanız.',
    seo: {
      title: 'Yazılım mimarisi danışmanlığı ve sistem tasarımı',
      description:
        'Kod yazılmadan önce sistemin parçalarını, veri modelini ve teknoloji seçimlerini gerekçeleriyle yazıyoruz. Çalışan sistemler için mimari inceleme de yapıyoruz.',
    },
    intro: [
      'Bir sistemde sonradan değiştirmesi en zor kararlar genellikle ilk haftalarda verilir. Verinin nerede duracağı ve hangi işlerin kullanıcıyı bekletmeden arka planda yapılacağı bu kararlar arasında.',
      'Bu kararları kod yazılmadan önce sizinle birlikte veriyor, gerekçeleriyle yazıya döküyoruz. Belgede vazgeçtiğimiz seçenekler ve neden vazgeçtiğimiz de yer alıyor. Altı ay sonra bir kararın neden verildiğini soran kişi cevabı orada buluyor.',
      'Çalışan bir sisteme de aynı gözle bakıyoruz. Yavaşlayan ya da her değişikliğin başka bir yeri bozduğu bir sistemi inceleyip gördüklerimizi öncelik sırasıyla yazıyoruz.',
    ],
    whatWeDo: [
      {
        title: 'Bileşenler ve veri akışı',
        text: 'Sistemin hangi parçalardan oluştuğunu ve verinin bu parçalar arasında nasıl dolaştığını bir şemayla çiziyoruz. Hangi çağrının cevabını beklemek gerektiği, hangisinin kuyruğa bırakılabileceği bu şemada belli oluyor.',
      },
      {
        title: 'Veri modeli',
        text: 'Tabloları, aralarındaki ilişkileri ve her verinin asıl kaynağını belirliyoruz. Arama indeksi ya da önbellek gibi kopyaların bu kaynaktan nasıl yeniden üretileceği de modelin parçası.',
      },
      {
        title: 'Teknoloji seçimi',
        text: 'Her seçimin gerekçesini ve vazgeçilen alternatifi yazıyoruz. Gerekmeyen bir teknolojiyi listeden çıkarmak da bu işin parçası.',
      },
      {
        title: 'Mevcut sistemin incelenmesi',
        text: 'Kodu, veritabanı şemasını, altyapıyı ve izleme verisini inceliyoruz. Bulduklarımızı, neyin önce düzeltilmesi gerektiğine göre sıralanmış bir raporla veriyoruz.',
      },
      {
        title: 'Adım adım geçiş planı',
        text: 'Bir parçanın değişmesi gerekiyorsa sistem çalışmaya devam ederken atılacak adımları planlıyoruz. Her adımın sonunda sistem kullanılabilir durumda kalıyor.',
      },
    ],
    goodFit: [
      'Yeni bir ürüne başlıyorsunuz ve ilk kararları kod yazılmadan önce yazılı görmek istiyorsunuz.',
      'Birden fazla şirkete hizmet verecek bir yazılım kuruyorsunuz ve şirketlerin verisinin nasıl ayrılacağına karar vermeniz gerekiyor.',
      'Mevcut sistem yavaşladı ya da her değişiklik başka bir yeri bozuyor ve nedenini bilmek istiyorsunuz.',
      'Tasarımı dışarıdan alıp geliştirmeyi kendi ekibinizle sürdüreceksiniz.',
    ],
    notFit: [
      'Ne yapılacağı belli olan küçük bir iş. Ayrı bir tasarım aşaması burada yalnızca süreyi uzatır.',
      'Kararlar verilmiş ve yalnızca onları onaylayacak bir dış görüş arıyorsunuz. İnceleme yaparsak gördüğümüz sorunları da yazarız.',
    ],
    techKeys: ['postgresql', 'elasticsearch', 'qdrant', 'rabbitmq', 'redis'],
    process: [
      {
        title: 'Kısıtlar',
        text: 'Sistemin ne yapacağını, ne kadar veri ve kullanıcıyla çalışacağını, bütçeyi ve ekibinizin bildiği teknolojileri soruyoruz.',
      },
      {
        title: 'Okuma',
        text: 'Çalışan bir sistem varsa önce onu okuyoruz: kod, veritabanı, altyapı ve geçmişte yaşanan kesintiler. Sistemi en iyi bilen kişiyle de konuşuyoruz.',
      },
      {
        title: 'Taslak',
        text: 'Bir mimari taslağı ve açık soruların listesini çıkarıp sizinle üzerinden geçiyoruz. Kararlar bu görüşmelerde netleşiyor.',
      },
      {
        title: 'Belge',
        text: 'Kararları, gerekçelerini ve vazgeçilen seçenekleri tek bir belgede topluyoruz. Değişiklik gerekiyorsa adım adım geçiş planı da bu belgede.',
      },
      {
        title: 'Belgeden sonra',
        text: 'Geliştirmeyi biz üstlenirsek belge işin kapsamı olur. Kendi ekibiniz devam edecekse belgeyi onlarla bir oturumda birlikte okuyoruz.',
      },
    ],
    faqs: [
      {
        q: 'Mikroservislere geçmemiz gerekiyor mu?',
        a: "Genellikle gerekmiyor. Birkaç kişilik bir ekip için tek bir uygulamayı geliştirip işletmek, ağ üzerinden birbirine bağlı birçok servisi işletmekten daha kolay. Turklex'in backend'i de tek bir uygulama. Uzun süren işler kuyruklarla, arama ise ayrı sistemlerle ayrılıyor. Bir parçanın tek başına ölçeklenmesi ya da ayrı bir ekibe verilmesi gerektiğinde o parçayı ayırmayı öneriyoruz.",
      },
      {
        q: 'Birçok müşteriye hizmet veren bir yazılımda müşterilerin verisini nasıl ayırmalıyız?',
        a: "Sık konuşulan iki yol var: her müşteriye ayrı bir veritabanı ya da ortak tablolarda her kaydın hangi müşteriye ait olduğunu tutan bir alan. Turklex'te ikincisini kullanıyoruz, her sorgu uygulama katmanında büroya göre filtreleniyor. Hangisinin size uyduğu müşteri sayısına ve müşterilerinizin sözleşmede istediği veri ayrımına bağlı.",
      },
      {
        q: 'Mevcut sistemimizi incelemeniz için neye ihtiyacınız var?',
        a: 'Kod deposuna ve altyapıya okuma yetkisi, izleme panoları varsa onlara erişim ve sistemi en iyi bilen kişiyle bir görüşme. Müşteri verinize erişmemiz gerekmiyor. Veritabanı şeması ve anonimleştirilmiş birkaç örnek kayıt çoğu zaman yeter.',
      },
      {
        q: 'Tasarım belgesinde neler oluyor?',
        a: 'Sistemin ne yapacağı ve kısıtları, bileşenleri ve veri akışını gösteren şema, veri modeli, her teknoloji seçiminin gerekçesi ve vazgeçilen alternatifi, bilinen riskler ve açık sorular. Mevcut bir sistem inceleniyorsa öncelik sırasına göre bulgular ve geçiş planı da ekleniyor.',
      },
    ],
    relatedKeys: ['backend', 'aws', 'ops'],
  },
  {
    key: 'ops',
    navTitle: 'DevOps ve altyapı yönetimi',
    title: 'DevOps ve altyapı yönetimi',
    summary:
      "Kodun test edilip yayına çıkmasını otomatik hale getiriyor, sunucuları ve izlemeyi kod olarak tanımlıyoruz. Turklex'i kendi sunucularımızda bu düzenle işletiyoruz.",
    chooseIf: 'Yayın hâlâ elle çıkıyorsa ya da sistemin durduğunu kullanıcılarınızdan duyuyorsanız.',
    seo: {
      title: 'DevOps danışmanlığı: CI/CD, Terraform ve izleme',
      description:
        "Yayını otomatik hale getiriyor, sunucuları Ansible, kaynakları Terraform ile kod olarak tanımlıyoruz. Turklex'i de böyle işletiyoruz. Durumunuzu anlatın.",
    },
    intro: [
      "Turklex'i kendi sunucularımızda işletiyoruz. Sunucuların kurulumu Ansible'da, uygulama kaynakları ve Cloudflare ayarları Terraform'da, her ortamın servisleri bir Docker Compose tanımında duruyor. Canlı ve test ortamı ayrı sanal makinelerde çalışıyor.",
      "Derleme ve yayın GitHub Actions'ta çalışıyor. İzleme verisini OpenTelemetry ile toplayıp Grafana'da izliyoruz.",
      'Sizin sisteminize de aynı düzeni kuruyoruz. Böylece yayın bir kişinin hafızasına bağlı kalmıyor, bir sorun çıktığında da alarm size geliyor.',
    ],
    whatWeDo: [
      {
        title: 'Yayın akışı (CI/CD)',
        text: "Her pull request'te testler ve derleme çalışıyor. Ana dala giren kod kendiliğinden test ortamına çıkıyor, canlı ortama yayın ise değişiklik orada denendikten sonra birinin onayıyla başlıyor. Turklex de böyle yayınlanıyor.",
      },
      {
        title: 'Sunucu kurulumu',
        text: 'İşletim sistemi ayarlarını, kullanıcıları, güvenlik duvarını ve servisleri Ansible ile kuruyoruz. Bozulan bir sunucunun yerine aynı koddan yenisi kurulabiliyor.',
      },
      {
        title: "Container'lar ve ortamlar",
        text: 'Her servis bir container olarak çalışıyor. Test ve canlı ortam aynı tanımdan kuruluyor, aralarındaki fark yalnızca ayarlarda.',
      },
      {
        title: 'Terraform ile kaynaklar',
        text: "Kuyrukları, depolama alanlarını ve DNS kayıtlarını Terraform ile tanımlıyoruz, planı CI'da çıkarıyoruz. Turklex'te canlı ortamın planı bir kaynağı silecekse CI hata veriyor.",
      },
      {
        title: 'İzleme ve alarm',
        text: "Backend'den trace, ölçüm ve log topluyoruz. Panoları ve alarm kurallarını kod olarak yazıp sürüm kontrolünde tutuyoruz. Bir sunucudan veri gelmesi durduğunda da alarm çalıyor.",
      },
      {
        title: 'Yedekleme',
        text: 'Veritabanı yedeklerini sunucunun dışındaki bir depoya alıyoruz. Yedekten geri dönmenin adımlarını da yazıya döküyoruz.',
      },
    ],
    goodFit: [
      'Yayın, bir kişinin bildiği ve elle yapılan adımlara bağlı. O kişi izindeyken yayın çıkmıyor.',
      'Sistemin durduğunu kullanıcılarınızdan duyuyorsunuz.',
      'Kendi sunucularınızda çalışıyorsunuz ve buluta geçmeden önce orada düzen kurmak istiyorsunuz.',
      'Yedek alındığını biliyorsunuz ama yedekten geri dönmeyi hiç denemediniz.',
    ],
    notFit: [
      'Uygulamanız yönetilen bir platformda çalışıyor ve yayın zaten otomatik. Üzerine ayrı bir altyapı kurmak yalnızca iş çıkarır.',
      'Tek sunucuda çalışan ve ayda bir güncellenen küçük bir uygulamanız var. Yazılı bir yayın kontrol listesi çoğu zaman yeter. Otomasyonun kurulumu ve bakımı, kazandırdığından fazlasını alabilir.',
    ],
    techKeys: ['docker', 'terraform', 'ansible', 'proxmox', 'github-actions', 'opentelemetry', 'grafana', 'cloudflare'],
    process: [
      {
        title: 'Bugünkü yayın',
        text: 'Yayını yapan kişiyle oturup bugün elle yapılan her adımı yazıyoruz. Sistemin nasıl izlendiğine ve yedeklerin nereye gittiğine de bakıyoruz.',
      },
      {
        title: 'Öncelik',
        text: 'Ters gittiğinde en çok zarar veren adımı sizinle seçip işe oradan başlıyoruz.',
      },
      {
        title: 'Otomasyon',
        text: 'Yayın akışını kuruyor, ilk otomatik yayını ekibinizle birlikte yapıyoruz.',
      },
      {
        title: 'Alarm ve geri yükleme denemesi',
        text: 'Alarmları kurup gerçekten size ulaştığını deniyoruz. Yedekten geri yüklemeyi bir kez baştan sona yapıyoruz.',
      },
      {
        title: 'Devir',
        text: 'Bir yayını geri almanın ve yedekten dönmenin adımlarını anlatan belgeyi ekibinize bırakıyoruz.',
      },
    ],
    faqs: [
      {
        q: 'Bulut kullanmıyoruz, kendi sunucularımızda çalışıyoruz. Bu hizmet bize uyar mı?',
        a: 'Uyar. Turklex de kendi sunucularımızda çalışıyor. Sunucuları Ansible ile kuruyor, servisleri Docker ile çalıştırıyoruz. İki araç da sunucunun nerede durduğuyla ilgilenmiyor.',
      },
      {
        q: "Kubernetes'e ihtiyacımız var mı?",
        a: "Birkaç sunucuya sığan bir sistem için yok. Turklex'i Kubernetes olmadan, her ortam için bir Docker Compose tanımıyla işletiyoruz. Bu düzeni kurmak da işletmek de daha kolay. Kubernetes'in getirdiği yük, onlarca servisi birçok sunucuya dağıtmanız gerektiğinde karşılığını verir.",
      },
      {
        q: 'Yayın otomatik olunca canlı ortama denenmemiş kod çıkmaz mı?',
        a: "Akış bunu önlemek için bir onay adımıyla bitiyor. Kod önce testlerden geçip test ortamına çıkıyor. Canlı ortama yayını, test ortamına bakan biri başlatıyor. Turklex'in canlı yayını da elle başlatılıyor.",
      },
      {
        q: 'Yedekler nerede duruyor?',
        a: "Sunucunun dışında. Turklex'te PostgreSQL yedekleri her gece sunucu dışındaki bir depoya gidiyor, kullanıcıların yüklediği dosyalar da sürümlenen ayrı bir depoda tutuluyor. Arama indeksleri yedeklenmiyor, gerektiğinde kaynak veriden yeniden üretiliyor.",
      },
    ],
    relatedKeys: ['aws', 'backend', 'architecture'],
  },
];
