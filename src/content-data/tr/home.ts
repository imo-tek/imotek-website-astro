import type { HomeContent } from '../types';

export const home: HomeContent = {
  seo: {
    title: 'IMOTEK | Yazılım geliştirme ve bulut danışmanlığı',
    description:
      "IMOTEK, şirketler için backend, web arayüzü, mobil uygulama ve bulut altyapısı işlerini üstlenen Ankara merkezli bir yazılım şirketi. Turklex'in geliştiricisi.",
  },
  hero: {
    title: 'Yazılım geliştiriyor ve üzerinde çalıştığı altyapıyı kuruyoruz.',
    subtitle:
      "IMOTEK, Ankara'da kurulu bir yazılım şirketi. Kendi yazılım ekibi olmayan ya da ekibine destek arayan şirketler için backend (uygulamanın sunucu tarafı), web arayüzü, mobil uygulama ve bulut altyapısı işlerini üstleniyoruz.",
    primaryCta: 'Projenizi anlatın',
    secondaryCta: 'Hizmetlere bakın',
  },
  services: {
    title: 'Hangi işleri üstleniyoruz',
    intro:
      'Altı hizmetimiz var. Her birinin sayfasında ne yaptığımızı, hangi durumda doğru adres olduğumuzu ve hangi durumda olmadığımızı yazdık.',
    linkLabel: 'Hizmetleri yan yana görün',
  },
  product: {
    label: 'Kendi ürünümüz',
    title: 'Turklex: avukatlar ve hukuk büroları için yapay zekâ destekli hukuk platformu',
    paragraphs: [
      "Turklex'i biz geliştiriyor ve işletiyoruz. Mevzuat ve içtihat araması, yapay zekâ asistanı, belge hazırlama ve dosya yönetimi sunuyor. UYAP entegrasyonu, Chrome uzantısı, Claude ile ChatGPT için de bağlayıcısı var.",
      'Turklex yayında ve satışta. Kotlin, Quarkus, PostgreSQL ve React ile yazıldı. Müşteri işlerinde önerdiğimiz araçların çoğunu burada her gün kullanıyoruz.',
    ],
    pageLinkLabel: "Turklex'i nasıl kurduğumuzu okuyun",
    siteLinkLabel: "turklex.ai'a gidin",
  },
  howWeWork: {
    title: 'Nasıl çalışıyoruz',
    intro: 'Bir iş genellikle şu sırayla ilerliyor.',
    steps: [
      {
        title: 'Durumu anlatırsınız',
        text: 'Ne üzerinde çalıştığınızı ve nerede takıldığınızı birkaç cümleyle yazarsınız.',
      },
      {
        title: 'Kapsamı yazarız',
        text: 'Neyi üstleneceğimizi ve neyi üstlenmeyeceğimizi yazılı olarak bildiririz.',
      },
      {
        title: 'Küçük parçalarla ilerleriz',
        text: 'İş, gösterilebilir parçalar halinde ilerler. Her parça testleriyle birlikte gelir.',
      },
      {
        title: 'Devrederiz',
        text: 'Kodu ve nasıl işletileceğini anlatan belgeyi ekibinize devrederiz.',
      },
    ],
    linkLabel: 'Çalışma biçimimizin ayrıntılarını okuyun',
  },
  cta: {
    title: 'Ne üzerinde çalıştığınızı yazın',
    text: 'Birkaç cümle yeter. Neyi üstlenebileceğimizi ve neyi üstlenemeyeceğimizi açıkça söyleriz.',
    button: 'Bize yazın',
  },
};
