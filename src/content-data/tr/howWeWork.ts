import type { HowWeWorkContent } from '../types';

export const howWeWork: HowWeWorkContent = {
  seo: {
    title: 'Nasıl çalışıyoruz: ilk mesajdan devre kadar',
    description:
      "IMOTEK'te bir yazılım ya da altyapı işi nasıl ilerler: yazılı kapsam, testleriyle gelen pull request'ler, önce test ortamı, sonunda kod ve işletme belgesi.",
  },
  title: 'Nasıl çalışıyoruz',
  intro: [
    'Bir iş bize çoğunlukla bir e-postayla gelir. Kodu ve onu işletmek için gereken belgeyi ekibinize devrettiğimizde biter.',
    'Bütün bir ürün de tek bir servis de aynı sırayla ilerler.',
  ],
  steps: [
    {
      title: 'Durumu yazarsınız',
      text: 'Ne yapmak istediğinizi, bugün elinizde ne olduğunu ve nerede takıldığınızı birkaç cümleyle anlatırsınız. Çalışan bir kod ya da altyapı varsa erişim verdiğiniz kadarına bakarız.',
    },
    {
      title: 'Bize uygun olup olmadığını söyleriz',
      text: 'İş, kullandığımız teknolojilerin ya da yaptığımız işlerin dışında kalıyorsa bunu ilk yanıtımızda söyleriz. Kullandığımız araçların listesi teknolojiler sayfasında.',
    },
    {
      title: 'Kapsamı yazarız',
      text: 'Neyi yapacağımızı, neyi yapmayacağımızı ve işin hangi teknik sonuçla biteceğini yazılı olarak bildiririz. Kapsamı okuyup onayladığınızda işe başlarız.',
    },
    {
      title: 'Küçük parçalarla geliştiririz',
      text: 'İşi, tek başına gözden geçirilebilecek parçalara böleriz. Her parça testleriyle birlikte bir pull request olarak açılır, birleştirildikten sonra önce test ortamına çıkar.',
    },
    {
      title: 'Canlıya alırız',
      text: 'Bir değişiklik canlı ortama ancak test ortamında çalıştıktan sonra çıkar. Her parçayı canlıya çıkmadan önce test ortamında görebilirsiniz.',
    },
    {
      title: 'Devrederiz',
      text: 'Kodu ve nasıl derlenip çalıştırılacağını, nasıl yayına alınacağını anlatan belgeyi ekibinize teslim ederiz. Belgenin üzerinden ekibinizle birlikte geçeriz.',
    },
    {
      title: 'Devirden sonra',
      text: 'Sistemi bundan sonra ekibiniz işletebilir. Yeni geliştirme ya da altyapının işletilmesi için bizimle devam etmek isterseniz bu da ayrı bir iş olarak, yine yazılı bir kapsamla başlar.',
    },
  ],
  sections: [
    {
      id: 'almadigimiz-isler',
      title: 'Almadığımız işler',
      bullets: [
        'Gün bazında kişi kiralamıyoruz. Ekibinizle birlikte çalıştığımız işlerde de üstlendiğimiz parçanın kapsamı ve sonucu yazılı olur.',
        'Sonucunun sorumluluğunu alamayacağımız bir işi, o dönem boş vaktimiz olsa bile almıyoruz.',
        'Kurumsal kimlik, marka tasarımı, reklam ve içerik pazarlaması yapmıyoruz.',
        'Paket yazılım ya da lisans satmıyoruz.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Yarım kalmış bir projemiz var. Bakar mısınız?',
      a: 'Bakarız. Kodu ve altyapıyı inceledikten sonra hangi kısmını üstlenebileceğimizi yazılı kapsamda belirtiriz. Üstlenemeyeceğimiz bir durumdaysa bunu da söyleriz.',
    },
    {
      q: 'Kendi ekibimiz var. Yalnızca bir kısmı için çalışabilir misiniz?',
      a: "Evet, örneğin yalnızca backend ya da yalnızca yayın akışı için. Bu durumda da gün bazında kişi vermiyoruz. Üstlendiğimiz parçanın kapsamı yazılı olur, kod da aynı şekilde testleriyle birlikte pull request'lerle gelir.",
    },
  ],
  cta: {
    title: 'İlk adım bir e-posta',
    text: 'Ne üzerinde çalıştığınızı ve bugün elinizde ne olduğunu birkaç cümleyle yazın.',
    button: 'Bize yazın',
  },
};
