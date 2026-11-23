import type { ContactContent } from '../types';

export const contact: ContactContent = {
  seo: {
    title: 'Contact: e-mail, phone and address',
    description:
      "Write to IMOTEK at info@imotek.tr or call +90 312 963 03 09. We're at ASO Teknopark, Sincan / Ankara, Turkey. Here is what to put in a first message.",
  },
  title: 'Contact',
  intro: [
    "Write a few sentences to info@imotek.tr on what you're working on and where it's stuck. There's no form on this site, so your e-mail comes straight to us.",
  ],
  mailButton: 'Write to info@imotek.tr',
  mailSubject: 'About a project',
  detailsTitle: 'Address and company details',
  sections: [
    {
      id: 'first-message',
      title: 'What to put in your first message',
      paragraphs: [
        "You don't need all of it. Whatever you can tell us helps us say in our first reply whether the job fits us.",
      ],
      bullets: [
        "What you want to build, or what isn't working.",
        'What you have today: a running system, half-finished code or only an idea.',
        'If you know them, the technologies you use and where the system runs (AWS, your own servers or somewhere else).',
        'A deadline or a budget limit, if there is one.',
        'Who will take the system over once the work is done.',
      ],
    },
    {
      id: 'what-happens-next',
      title: 'What happens next',
      paragraphs: [
        "We read your message and tell you whether the job is one for us. If it is, we ask our questions, then send you in writing what we'd take on.",
      ],
      link: { label: 'See how a job runs', to: 'howWeWork' },
    },
    {
      id: 'access-details',
      title: "Don't send passwords or keys",
      paragraphs: [
        "Please keep passwords, access keys and your customers' personal data out of a first message. If we need to look at a system, we'll agree separately on how you give us access.",
        'The privacy policy covers how we handle what you send us.',
      ],
      link: { label: 'Privacy policy', to: 'privacy' },
    },
    {
      id: 'turklex',
      title: 'Questions about Turklex',
      paragraphs: [
        'For Turklex accounts, pricing, the trial or using the product, please use the contact details on turklex.ai. info@imotek.tr is for software and cloud consulting.',
      ],
      link: { label: 'Go to turklex.ai', to: 'https://turklex.ai' },
    },
  ],
};
