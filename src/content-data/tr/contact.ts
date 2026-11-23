import type { ContactContent } from '../types';

export const contact: ContactContent = {
  seo: {
    title: 'İletişim: e-posta, telefon ve adres',
    description:
      "IMOTEK'e info@imotek.tr adresinden yazın ya da +90 312 963 03 09'u arayın. Adresimiz ASO Teknopark, Sincan / Ankara. İlk mesajda işe yarayan bilgiler de burada.",
  },
  title: 'İletişim',
  intro: [
    'Ne üzerinde çalıştığınızı ve nerede takıldığınızı birkaç cümleyle info@imotek.tr adresine yazın. Bu sitede form yok, e-postanız doğrudan bize gelir.',
  ],
  mailButton: 'info@imotek.tr adresine yazın',
  mailSubject: 'Proje hakkında',
  detailsTitle: 'Adres ve şirket bilgileri',
  sections: [
    {
      id: 'ilk-mesaj',
      title: 'İlk mesajda neler olsun',
      paragraphs: [
        'Hepsini bilmeniz gerekmiyor. Bildiklerinizi yazarsanız işin bize uygun olup olmadığını ilk yanıtımızda söyleyebiliriz.',
      ],
      bullets: [
        'Ne yapmak istediğiniz ya da neyin çalışmadığı.',
        'Bugün elinizde ne olduğu: çalışan bir sistem, yarım kalmış bir kod ya da yalnızca bir fikir.',
        'Biliyorsanız kullandığınız teknolojiler ve sistemin nerede çalıştığı (AWS, kendi sunucunuz ya da başka bir yer).',
        'Bir son tarih ya da bütçe sınırı varsa.',
        'İş bittiğinde sistemi kimin devralacağı.',
      ],
    },
    {
      id: 'sonrasi',
      title: 'Yazdıktan sonra',
      paragraphs: [
        'Mesajınızı okuyup işin bize uygun olup olmadığını söyleriz. Uygunsa sorularımızı sorar, ardından neyi üstleneceğimizi yazılı olarak bildiririz.',
      ],
      link: { label: 'Bir işin nasıl ilerlediğini okuyun', to: 'howWeWork' },
    },
    {
      id: 'erisim-bilgisi',
      title: 'Parola ve erişim bilgisi göndermeyin',
      paragraphs: [
        'İlk mesajda parola, erişim anahtarı ya da müşterilerinize ait kişisel veri paylaşmayın. Bir sisteme bakmamız gerekirse erişimi nasıl vereceğinizi ayrıca konuşuruz.',
        'E-postanızdaki bilgileri nasıl kullandığımız gizlilik politikasında yazıyor.',
      ],
      link: { label: 'Gizlilik politikası', to: 'privacy' },
    },
    {
      id: 'turklex',
      title: 'Turklex ile ilgili sorular',
      paragraphs: [
        'Turklex hesabı, fiyatlar, deneme süresi ya da ürünün kullanımıyla ilgili sorular için turklex.ai adresindeki iletişim kanallarını kullanın. info@imotek.tr adresi yazılım ve bulut danışmanlığıyla ilgili yazışmalar için.',
      ],
      link: { label: "turklex.ai'a gidin", to: 'https://turklex.ai' },
    },
  ],
};
