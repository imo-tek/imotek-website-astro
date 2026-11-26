import type { TechnologiesPageContent } from '../types';

export const technologiesPage: TechnologiesPageContent = {
  seo: {
    title: 'Teknolojiler: diller, bulut ve DevOps araçları',
    description:
      'Java, Kotlin, Go, Python, React, Next.js, Flutter, PostgreSQL, Kafka, AWS, Azure, Google Cloud ve Kubernetes ile yazılım geliştirip canlıda işletiyoruz.',
  },
  title: 'Teknolojiler',
  intro: 'Aşağıdaki araçlarla yazılım geliştirip canlıda işletiyoruz.',
  groups: {
    languages: {
      title: 'Programlama dilleri',
      text: "Backend'de Java, Kotlin, Go ve Python, arayüzde TypeScript kullanıyoruz. Hangisini seçeceğimizi ekibinizin bildiği dil ve projenin ihtiyacı belirliyor.",
    },
    backend: {
      title: 'Backend',
      text: "API'leri, arka planda çalışan işleri, kullanıcı girişini ve başka sistemlerle entegrasyonları bu araçlarla kuruyoruz.",
    },
    frontend: {
      title: 'Web arayüzü',
      text: 'Yönetim panelleri, müşteri portalları ve kurumsal siteler geliştiriyoruz. Arayüzünüz Vue ya da Angular ile yazıldıysa onunla devam ediyoruz.',
    },
    mobile: {
      title: 'Mobil',
      text: 'iOS ve Android uygulamasını tek kod tabanından React Native ya da Flutter ile çıkarıyoruz. Platforma özel bir ihtiyaç varsa o kısmı Swift ve Kotlin ile yazıyoruz.',
    },
    data: {
      title: 'Veri',
      text: 'Veritabanını tasarlıyor, tam metin ve anlam tabanlı aramayı, kuyrukları ve önbelleği kuruyoruz.',
    },
    cloud: {
      title: 'Bulut',
      text: 'Bulut hesabınızı kurup uygulamanızı oraya taşıyoruz. Sağlayıcıyı maliyete ve verinin hangi ülkede durması gerektiğine bakarak sizinle birlikte seçiyoruz.',
    },
    ops: {
      title: 'DevOps ve altyapı',
      text: "Build ve deploy'u otomatikleştiriyor, sunucuları ve Kubernetes kümelerini kodla yönetiyoruz.",
    },
    observability: {
      title: 'İzleme',
      text: 'Bir şey bozulduğunda hangi serviste ve ne zaman bozulduğunu görebilmeniz için metrik, log ve alarm kuruyoruz.',
    },
    testing: {
      title: 'Test',
      text: 'Birim testleri, gerçek veritabanıyla çalışan entegrasyon testleri ve tarayıcı testleri her değişiklikte kendiliğinden çalışıyor. Gerekirse yük testiyle sistemin ne kadar trafik kaldırdığını ölçüyoruz.',
    },
    ai: {
      title: 'Yapay zekâ',
      text: "Uygulamanıza belgelerde arama yapan ve soru cevaplayan özellikler ekliyoruz. Turklex'teki asistanı LangChain4j ile kurduk.",
    },
  },
  closing: 'Listede olmayan bir teknolojiyle çalışıyorsanız yazın, bilip bilmediğimizi söyleriz.',
  cta: {
    title: 'Sisteminizde neler olduğunu yazın',
    text: 'Mevcut sisteminizin nelerden oluştuğunu anlatın. Hangi parçasında yardımcı olabileceğimizi söyleriz.',
    button: 'Bize yazın',
  },
};
