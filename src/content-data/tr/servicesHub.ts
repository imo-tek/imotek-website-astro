import type { ServicesHubContent } from '../types';

export const servicesHub: ServicesHubContent = {
  seo: {
    title: 'Hizmetler: yazılım geliştirme ve bulut altyapısı',
    description:
      'Java backend, React web arayüzü, mobil uygulama, AWS altyapısı, DevOps ve sistem tasarımı. Her hizmetin hangi durumda doğru seçim olduğunu bir cümleyle yazdık.',
  },
  title: 'Hizmetler',
  intro: [
    'Şirketlerin yazılım ve altyapı işlerini üstleniyoruz. Bir ürünü mimarisinden canlıya alınmasına kadar yürütebilir, ekibinizin yanında yalnızca bir parçasını da alabiliriz.',
    'Her kartta o hizmetin hangi durumda doğru seçim olduğu yazıyor. Çoğu iş birden fazla karta dokunur. Yeni bir API yazılırken veritabanı ve yayın akışı da kurulur.',
    'Hangi dil ve araçlarla çalıştığımız teknolojiler sayfasında yazıyor. Sisteminiz listede olmayan bir şeyle kurulduysa işi alıp alamayacağımızı ilk yanıtımızda söyleriz.',
  ],
  groups: [
    { title: 'Yazılım geliştirme', serviceKeys: ['backend', 'frontend', 'mobile'] },
    { title: 'Bulut ve altyapı', serviceKeys: ['aws', 'ops', 'architecture'] },
  ],
  sections: [
    {
      id: 'her-hizmette',
      title: 'Her hizmette aynı olanlar',
      bullets: [
        'Neyi yapıp neyi yapmayacağımızı işe başlamadan yazılı olarak bildiririz.',
        'Kod küçük parçalar halinde, testleriyle birlikte pull request olarak gelir.',
        'Her değişiklik canlıya çıkmadan önce test ortamından geçer.',
        'İş bittiğinde kodu ve nasıl işletileceğini anlatan belgeyi ekibinize devrederiz.',
      ],
      link: { label: 'Nasıl çalıştığımızı okuyun', to: 'howWeWork' },
    },
    {
      id: 'listede-olmayanlar',
      title: 'Bu listede olmayan işler',
      paragraphs: [
        'Kurumsal kimlik, marka tasarımı, reklam ve içerik pazarlaması yapmıyoruz. Gün bazında kişi de kiralamıyoruz. Ekibinizin yanında çalıştığımız işlerde de üstlendiğimiz parçanın kapsamı ve sonucu yazılı olur.',
      ],
    },
  ],
  cta: {
    title: 'Hangisinin size uyduğundan emin değilseniz',
    text: 'Durumu birkaç cümleyle yazın. Hangi hizmetin işinize yarayacağını, hiçbiri yaramıyorsa bunu da söyleriz.',
    button: 'Bize yazın',
  },
  serviceCta: {
    title: 'Bu iş size uyuyorsa',
    text: 'Ne yapmak istediğinizi ve bugün elinizde ne olduğunu birkaç cümleyle yazın.',
    button: 'Projenizi anlatın',
  },
};
