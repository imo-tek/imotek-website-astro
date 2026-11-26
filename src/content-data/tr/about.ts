import type { AboutContent } from '../types';

export const about: AboutContent = {
  seo: {
    title: "Hakkımızda: Ankara'da kurulu yazılım şirketi",
    description:
      "IMOTEK, Eylül 2024'te kurulan, ASO Teknopark Ankara'da bulunan bir yazılım şirketi. Şirketlere yazılım ve bulut danışmanlığı veriyor, Turklex'i geliştiriyor.",
  },
  title: 'Hakkımızda',
  intro: [
    "IMOTEK, Eylül 2024'te kurulmuş bir yazılım şirketi. Unvanımız İMOTEK Yazılım Anonim Şirketi, merkezimiz Ankara'da, ASO Teknopark'ta.",
    "İki iş yapıyoruz. Şirketler için yazılım geliştiriyor, bu yazılımın çalıştığı altyapıyı kuruyoruz. Bir yandan da avukatlar için geliştirdiğimiz Turklex'i yazıp işletiyoruz.",
  ],
  sections: [
    {
      id: 'danismanlik',
      title: 'Yazılım ve bulut danışmanlığı',
      paragraphs: [
        'Altı alanda iş alıyoruz: Java backend geliştirme, React web arayüzleri, mobil uygulama geliştirme, AWS bulut altyapısı, DevOps ve altyapı yönetimi, sistem tasarımı ve mimari.',
        'Bir işi baştan sona yürütebilir ya da ekibinizin yanında yalnızca bir parçasını üstlenebiliriz.',
      ],
      link: { label: 'Hizmetleri tek tek görün', to: 'services' },
    },
    {
      id: 'turklex',
      title: 'Turklex',
      paragraphs: [
        "Turklex, Türkiye'deki avukatlar ve hukuk büroları için geliştirdiğimiz yapay zekâ destekli hukuk platformu. Mevzuat ve içtihat araması, yapay zekâ asistanı, belge hazırlama ve dava takibi aynı yerde duruyor. Chrome uzantısı UYAP'taki dosyaları Turklex'e aktarıyor. Claude ve ChatGPT için geliştirdiğimiz bağlayıcıyla avukatlar mevzuat ve içtihat aramasını bu iki asistandan da yapabiliyor.",
        'Turklex yayında ve satışta. Ürünü TÜBİTAK 1507 KOBİ Ar-Ge Başlangıç Destek Programı desteğiyle geliştiriyoruz.',
      ],
      link: { label: "Turklex'i nasıl kurduğumuzu okuyun", to: 'turklex' },
    },
    {
      id: 'urunumuzu-isletiyoruz',
      title: 'Ürünümüzü kendimiz işletiyoruz',
      paragraphs: [
        "Turklex'in kodunu da altyapısını da kendimiz yönetiyoruz. Bir sürüm canlıya çıkarken ya da bir servis yavaşladığında sorunu devredebileceğimiz başka bir ekip yok.",
        "Müşteri işlerinde önerdiğimiz araçların çoğunu Turklex'te her gün kullanıyoruz. Altyapıyı Terraform ve Ansible ile tanımlıyor, yayını GitHub Actions ile yapıyor, servisleri OpenTelemetry ve Grafana ile izliyoruz. Bu araçların sürüm yükseltmesi de bakımı da bizim işimiz.",
        "Turklex'in uygulaması ve veritabanları kendi sunucularımızda çalışıyor, yapay zekâ modellerine ise dış sağlayıcıların API'leri üzerinden erişiyor. Backend'i Quarkus ile yazıldı. Bu yüzden AWS ve Spring Boot hizmetlerimizde Turklex'i örnek göstermiyoruz.",
      ],
    },
    {
      id: 'yapmadiklarimiz',
      title: 'Yapmadığımız işler',
      bullets: [
        'Kurumsal kimlik, marka tasarımı, reklam ya da içerik pazarlaması.',
        'Paket yazılım ya da lisans satışı.',
        'Gün bazında kişi kiralama. Ekibinizin yanında çalıştığımızda da üstlendiğimiz işin kapsamı ve sonucu yazılı olur.',
        'Sonucunun sorumluluğunu alamayacağımız işler.',
      ],
      link: { label: 'Nasıl çalıştığımızı okuyun', to: 'howWeWork' },
    },
  ],
  companyTitle: 'Şirket bilgileri',
  cta: {
    title: 'Bizimle çalışmayı düşünüyorsanız',
    text: 'Ne üzerinde çalıştığınızı birkaç cümleyle yazın. İşin bize uygun olup olmadığını söyleriz.',
    button: 'Bize yazın',
  },
};
