import type { ProductContent } from '../types';

export const product: ProductContent = {
  seo: {
    title: 'Turklex: Avukatlar için Yapay Zekâ Hukuk Platformu',
    description:
      "IMOTEK'in geliştirip işlettiği Turklex: avukatlar için UYAP entegrasyonu, mevzuat ve içtihat araması, dilekçe yazımı ve dava takibi. Fiyatlar turklex.ai'da.",
  },
  title: 'Turklex: avukatlar için yapay zekâ hukuk platformu',
  intro: [
    "Turklex, Türkiye'de çalışan avukatlar ve hukuk büroları için geliştirdiğimiz hukuk yazılımı. Avukat UYAP'taki dosyasını Turklex'e alıp aynı ekranda mevzuat ve karar arıyor, dilekçesini yazıyor, davasını takip ediyor.",
    'Turklex canlıda ve ücretli planlarla satılıyor. Yazılımı da üzerinde çalıştığı sunucuları da biz yönetiyoruz.',
  ],
  facts: [
    {
      label: 'Kimler için',
      value: "Türkiye'de çalışan avukatlar ve hukuk büroları, tek avukatlı bürodan kurumsal hukuk departmanına kadar",
    },
    {
      label: 'Modüller',
      value: 'UYAP entegrasyonu, yapay zekâ asistanı, mevzuat ve içtihat, belge ve evrak, dava ve büro yönetimi',
    },
    { label: 'Ek araçlar', value: 'UYAP için Chrome uzantısı, Claude ve ChatGPT için bağlayıcı' },
    { label: 'Durum', value: 'Canlıda, ücretli planlarla satılıyor' },
    { label: 'Fiyat, deneme ve kayıt', value: 'turklex.ai' },
    { label: 'Geliştiren', value: 'İMOTEK Yazılım A.Ş.' },
    { label: 'Ar-Ge desteği', value: 'TÜBİTAK 1507 KOBİ Ar-Ge Başlangıç Destek Programı' },
  ],
  sections: [
    {
      id: 'moduller',
      title: "Turklex'in modülleri",
      items: [
        {
          title: 'UYAP entegrasyonu',
          text: "Dosya, evrakıyla birlikte tek işlemde Turklex'e geliyor. Yüklendiği anda içinde arama yapıp üzerinde çalışmaya başlayabilirsiniz. UDF, PDF ve XML evrak uygulamanın içinde açılıyor.",
        },
        {
          title: 'Yapay zekâ asistanı',
          text: 'Asistan, dilekçe hazırlanmadan önce süreyi, zorunlu ön adımı, görev ve yetkiyi, taraf sıfatını denetliyor. Bir engel bulursa gerekçesini de yazarak bildiriyor.',
        },
        {
          title: 'Mevzuat ve içtihat',
          text: 'Olayı bir cümleyle anlatıyorsunuz, Turklex maddi vakıası benzeyen kararları getiriyor. Mevzuat madde düzeyinde geliyor, mülga hükümler işaretli.',
        },
        {
          title: 'Belge ve evrak',
          text: 'Hazırlanan belgede dayanaklar ve dosyadaki taraf bilgileri yerine oturmuş olarak geliyor. Her atıf kaynağına bağlı. Gelen evrakın içinde de arama yapabiliyorsunuz.',
        },
        {
          title: 'Dava ve büro yönetimi',
          text: 'Türk hukukuna göre tanımlı dava türlerini, duruşmaları ve giderleri tek ekranda takip ediyorsunuz. Araştırma ve yazım bu kayıtlardan besleniyor, bilgiyi bir kez giriyorsunuz.',
        },
      ],
      link: { label: 'Ekranları görmek için demo isteyin', to: 'https://turklex.ai/demo' },
    },
    {
      id: 'uzanti-ve-baglayici',
      title: 'Chrome uzantısı ile Claude ve ChatGPT bağlayıcısı',
      items: [
        {
          title: 'Chrome uzantısı',
          text: "UYAP Avukat Portalı'ndaki dava listesini, tarafları, duruşmaları ve evrakı Turklex'e aktarıyor. Aktarımı avukat başlatıyor, uzantı arka planda kendi kendine çalışmıyor. UETS üzerinden gelen bir tebligatın belgesinde süre yazıyorsa Turklex o tarih için bir görev öneriyor, görevi avukat onaylıyor.",
        },
        {
          title: 'Claude ve ChatGPT bağlayıcısı',
          text: "Claude ya da ChatGPT kullanıyorsanız Turklex'i bağlayıcı olarak ekleyip mevzuat ve içtihat aramasını sohbetin içinden yapabilirsiniz. Bağlayıcının tek yetkisi bu arama, büronuzun dosyalarını görmüyor. Ücretli planlarda ve deneme süresinde açık.",
        },
      ],
    },
    {
      id: 'sinirlar',
      title: "Turklex'in sınırları",
      paragraphs: [
        "Kararı avukat verir. Turklex'in hazırladığı metni ve bulduğu kaynakları avukat okuyup kontrol eder, sorumluluk da onda kalır.",
        'Turklex tebligattaki süreyi belgede yazan tarihten okuyup görev olarak öneriyor. Süreyi kanundan hesaplamıyor.',
      ],
    },
  ],
  faqs: [
    {
      q: "Turklex'in fiyatı ne kadar?",
      a: "Planlar ve fiyatlar turklex.ai'daki fiyatlandırma sayfasında. Deneme ve kayıt da turklex.ai üzerinden yapılıyor.",
    },
    {
      q: 'Büronun verileri nerede saklanıyor?',
      a: "Müşteri içeriği Türkiye'deki sunucularda saklanıyor. Yapay zekâ modelleri ise yurt dışındaki bir sağlayıcıda çalışıyor. Modele yalnızca o isteğin gerektirdiği içerik gidiyor, bu içerik sağlayıcıda saklanmıyor ve model eğitiminde kullanılmıyor. Ayrıntılar turklex.ai'daki veri işleme sözleşmesinde, kayıt olmadan okunabiliyor.",
    },
    {
      q: 'Turklex hangi kaynaklarda arıyor?',
      a: 'Mevzuatta ve Yargıtay, Danıştay, Anayasa Mahkemesi, Sayıştay ile Uyuşmazlık Mahkemesi kararlarında arıyor, emsal kararlara da bakıyor. Bulduğu kararın tam metnini Turklex içinden açabiliyorsunuz.',
    },
  ],
  external: {
    title: 'Fiyat, deneme ve kayıt',
    text: "Planlar, fiyatlar, deneme ve kayıt turklex.ai'da. Ekranları bir görüşmede birlikte görmek isterseniz oradan demo da isteyebilirsiniz.",
    button: "turklex.ai'a gidin",
  },
  cta: {
    title: 'Benzer bir sistem kuruyorsanız',
    text: "Ürününüzde arama, kuyruk ya da bir dil modeli varsa bunları Turklex'te nasıl kurduğumuzu anlatabiliriz. Sizin sisteminiz için ne önereceğimizi de söyleriz.",
    button: 'Bize yazın',
  },
};
