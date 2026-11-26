import type { LegalContent } from '../types';

export const privacy: LegalContent = {
  seo: {
    title: 'Gizlilik politikası',
    description:
      'imotek.tr ziyaretinde işlenen veriler: analitik, çerez ve form yok. Tema tercihi tarayıcınızda kalır, siteyi Cloudflare sunar, e-postalar yanıt için kullanılır.',
  },
  title: 'Gizlilik politikası',
  updated: '2026-11-22',
  updatedLabel: 'Son güncelleme',
  intro: [
    "Bu metin, imotek.tr sitesini ziyaret ettiğinizde ve bize e-posta yazdığınızda hangi kişisel verilerin işlendiğini anlatır. Veri sorumlusu İMOTEK Yazılım Anonim Şirketi'dir (MERSİS 0474090238600001). Adres: ASO Teknopark, Ahi Evran OSB Mah., Erkunt Cad. No: 3/4, 06935 Sincan / Ankara.",
  ],
  sections: [
    {
      title: 'Bu sitede olmayanlar',
      paragraphs: [
        'Sitede analitik ya da ziyaretçi takip aracı, reklam ve iletişim formu yok. Biz çerez koymuyoruz. Yazı tipleri dahil bütün dosyalar bu siteden yüklenir, sayfalar üçüncü taraf hizmetlerden komut dosyası çağırmaz.',
      ],
    },
    {
      title: 'Tarayıcınızda saklanan bilgi',
      paragraphs: [
        'Açık ya da koyu tema seçiminiz tarayıcınızın yerel depolama alanında (localStorage) tutulur. Bu bilgi bize gönderilmez. Tarayıcınızda bu sitenin verilerini silerek kaldırabilirsiniz.',
      ],
    },
    {
      title: 'Siteyi sunan altyapı',
      paragraphs: [
        "Siteyi Cloudflare sunar. Bir sayfayı açtığınızda Cloudflare, sayfayı size ulaştırmak ve siteyi saldırılara karşı korumak için IP adresiniz, tarayıcı bilgileriniz ve istediğiniz adres gibi teknik verileri işler. Bu koruma için bazı durumlarda zorunlu bir güvenlik çerezi koyabilir. İsteğiniz Cloudflare'ın Türkiye dışındaki bir veri merkezinden de karşılanabilir.",
        "Cloudflare'ın bu verileri nasıl işlediği kendi gizlilik politikasında yazıyor.",
      ],
      link: { label: 'Cloudflare gizlilik politikası', to: 'https://www.cloudflare.com/privacypolicy/' },
    },
    {
      title: 'Bize e-posta yazdığınızda',
      paragraphs: [
        'E-postanızla adınız, e-posta adresiniz ve yazdıklarınız bize ulaşır. Bu bilgileri yalnızca size yanıt vermek, talebinizi değerlendirmek ve bir iş üzerinde anlaşırsak o işi yürütmek için kullanırız.',
      ],
    },
    {
      title: 'Haklarınız',
      paragraphs: [
        "6698 sayılı Kişisel Verilerin Korunması Kanunu'nun (KVKK) 11. maddesi uyarınca hakkınızda hangi verileri işlediğimizi öğrenebilir, bu verilerin düzeltilmesini ya da silinmesini isteyebilirsiniz.",
        'Sorularınızı info@imotek.tr adresine iletebilir, başvurunuzu yukarıdaki adrese yazılı olarak yapabilirsiniz. Başvurulara Kanunda öngörülen süre içinde, en geç otuz günde yanıt veririz.',
      ],
    },
    {
      title: 'Turklex',
      paragraphs: [
        "Bu metin yalnızca imotek.tr için geçerli. Turklex'in gizlilik ve KVKK metinleri turklex.ai adresinde.",
      ],
      link: { label: 'turklex.ai', to: 'https://turklex.ai' },
    },
    {
      title: 'Değişiklikler',
      paragraphs: ['Bu metni değiştirdiğimizde sayfanın başındaki tarihi güncelleriz.'],
    },
  ],
};

export const terms: LegalContent = {
  seo: {
    title: 'Kullanım koşulları',
    description:
      'imotek.tr kullanım koşulları: sitedeki metinler hizmetlerimizi tanıtır, teklif ya da sözleşme sayılmaz. Bir işin koşulları ayrı bir yazılı anlaşmayla belirlenir.',
  },
  title: 'Kullanım koşulları',
  updated: '2026-11-22',
  updatedLabel: 'Son güncelleme',
  intro: ['Bu koşullar imotek.tr sitesini ve sitedeki blog yazılarını kullanan herkes için geçerlidir.'],
  sections: [
    {
      title: 'Sitedeki bilgiler',
      paragraphs: [
        "Sitedeki metinler IMOTEK'in hizmetlerini ve Turklex'i tanıtır. Teklif ya da sözleşme sayılmaz. Bir işin kapsamı, ücreti ve koşulları, o iş için taraflar arasında ayrıca yapılan yazılı anlaşmayla belirlenir.",
      ],
    },
    {
      title: 'Blog yazıları',
      paragraphs: [
        'Blog yazıları kendi işimizden çıkan teknik notlardır. Yazıda anlatılan bir yöntemi kendi sisteminize uygulamadan önce kullandığınız sürümlerin, ayarların ve sizin durumunuzun yazıdakiyle örtüşüp örtüşmediğini kontrol edin.',
      ],
    },
    {
      title: 'Fikri haklar',
      paragraphs: [
        "Sitedeki metinlerin hakları İMOTEK Yazılım Anonim Şirketi'ne aittir. Diğer ürün ve marka adları sahiplerinindir.",
      ],
    },
    {
      title: 'Dış bağlantılar',
      paragraphs: ['Site turklex.ai gibi başka sitelere de bağlantı verir. Oralarda o sitelerin koşulları geçerlidir.'],
    },
    {
      title: 'Değişiklikler',
      paragraphs: ['Bu koşulları değiştirdiğimizde sayfanın başındaki tarihi güncelleriz.'],
    },
    {
      title: 'İletişim',
      paragraphs: ['Sorularınız için info@imotek.tr adresine yazın.'],
    },
  ],
};
