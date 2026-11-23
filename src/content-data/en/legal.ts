import type { LegalContent } from '../types';

export const privacy: LegalContent = {
  seo: {
    title: 'Privacy policy',
    description:
      'What is processed when you visit imotek.tr or e-mail us: no analytics, cookies or forms. Your theme choice stays in your browser and Cloudflare serves the site.',
  },
  title: 'Privacy policy',
  updated: '2026-11-22',
  updatedLabel: 'Last updated',
  intro: [
    'This policy explains what personal data is processed when you visit imotek.tr and when you e-mail us. The data controller is İMOTEK Yazılım Anonim Şirketi (MERSİS 0474090238600001), ASO Teknopark, Ahi Evran OSB Mah., Erkunt Cad. No: 3/4, 06935 Sincan / Ankara, Turkey.',
  ],
  sections: [
    {
      title: "What this site doesn't use",
      paragraphs: [
        "The site has no analytics or visitor tracking, no advertising and no contact form, and we don't set cookies. Every file, fonts included, loads from this site. The pages don't call scripts from third-party services.",
      ],
    },
    {
      title: "What's stored in your browser",
      paragraphs: [
        "Your choice of light or dark theme is kept in your browser's local storage. It isn't sent to us, and clearing this site's data in your browser removes it.",
      ],
    },
    {
      title: 'Hosting',
      paragraphs: [
        'Cloudflare serves the site. When you open a page, Cloudflare processes technical data such as your IP address, your browser details and the address you requested, to deliver the page and to protect the site from attacks. For that protection it may sometimes set a security cookie. Your request may be served from a Cloudflare data centre outside Turkey.',
        "Cloudflare's own privacy policy explains how it handles this data.",
      ],
      link: { label: 'Cloudflare privacy policy', to: 'https://www.cloudflare.com/privacypolicy/' },
    },
    {
      title: 'When you e-mail us',
      paragraphs: [
        'An e-mail brings us your name, your e-mail address and whatever you write. We use these only to reply, to assess your request and, if we agree on a job, to carry it out.',
      ],
    },
    {
      title: 'Your rights',
      paragraphs: [
        "Under Article 11 of Turkey's Personal Data Protection Law No. 6698 (KVKK), you can ask what data we process about you and ask us to correct or delete it.",
        'Send questions to info@imotek.tr. Formal applications go in writing to the address above, and we answer them within the period the law sets, at most thirty days.',
      ],
    },
    {
      title: 'Turklex',
      paragraphs: ["This policy covers imotek.tr only. Turklex's privacy and data protection texts are on turklex.ai."],
      link: { label: 'turklex.ai', to: 'https://turklex.ai' },
    },
    {
      title: 'Changes',
      paragraphs: ['When we change this policy, we update the date at the top of the page.'],
    },
  ],
};

export const terms: LegalContent = {
  seo: {
    title: 'Terms of use',
    description:
      'Terms of use for imotek.tr: the texts describe our services and are not an offer or a contract. The terms of any job are set in a separate written agreement.',
  },
  title: 'Terms of use',
  updated: '2026-11-22',
  updatedLabel: 'Last updated',
  intro: ['These terms apply to anyone using imotek.tr, including its blog.'],
  sections: [
    {
      title: "What's on the site",
      paragraphs: [
        "The texts on this site describe IMOTEK's services and Turklex. They aren't an offer or a contract. The scope, price and terms of any job are set in a separate written agreement between the parties for that job.",
      ],
    },
    {
      title: 'Blog posts',
      paragraphs: [
        'Blog posts are technical notes from our own work. Before you apply a method from a post to your own systems, check that your versions, settings and situation match the ones described.',
      ],
    },
    {
      title: 'Intellectual property',
      paragraphs: [
        'The texts on this site belong to İMOTEK Yazılım Anonim Şirketi. Other product and brand names belong to their owners.',
      ],
    },
    {
      title: 'External links',
      paragraphs: ['The site links to other sites such as turklex.ai. Their own terms apply there.'],
    },
    {
      title: 'Changes',
      paragraphs: ['When we change these terms, we update the date at the top of the page.'],
    },
    {
      title: 'Contact',
      paragraphs: ['For questions about these terms, write to info@imotek.tr.'],
    },
  ],
};
