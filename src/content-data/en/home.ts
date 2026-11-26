import type { HomeContent } from '../types';

export const home: HomeContent = {
  seo: {
    title: 'IMOTEK | Software development and cloud consulting',
    description:
      'IMOTEK is a software company in Ankara, Turkey. We take on backend, web front end, mobile and cloud infrastructure work, and we build Turklex.',
  },
  hero: {
    title: 'We build software and set up the infrastructure it runs on.',
    subtitle:
      'IMOTEK is a software company in Ankara, Turkey. We take on backend, web front end, mobile app and cloud infrastructure work for companies that have no software team of their own, or need more hands on the one they have.',
    primaryCta: 'Tell us about your project',
    secondaryCta: 'See the services',
  },
  services: {
    title: 'The work we take on',
    intro:
      "We offer six services. Each one has a page that says what we do, when we're the right choice and when we aren't.",
    linkLabel: 'See the services side by side',
  },
  product: {
    label: 'Our own product',
    title: 'Turklex: an AI legal platform for lawyers and law firms in Turkey',
    paragraphs: [
      'We build and run Turklex ourselves. It has legislation and case-law search, an AI assistant, document drafting and case management. It integrates with UYAP, the e-filing system of the Turkish courts, and comes with a Chrome extension and a connector for Claude and ChatGPT.',
      'Turklex is live and on sale. It is written in Kotlin, Quarkus, PostgreSQL and React. Most of the tools we recommend to clients are tools we use there every day.',
    ],
    pageLinkLabel: 'Read how we built Turklex',
    siteLinkLabel: 'Go to turklex.ai',
  },
  howWeWork: {
    title: 'How we work',
    intro: 'A piece of work usually goes in this order.',
    steps: [
      {
        title: 'You describe the situation',
        text: "You write a few sentences on what you're working on and where it is stuck.",
      },
      {
        title: 'We write the scope',
        text: "We tell you in writing what we will take on and what we won't.",
      },
      {
        title: 'We move in small pieces',
        text: 'The work advances in pieces you can look at. Each piece comes with its tests.',
      },
      {
        title: 'We hand over',
        text: 'We hand the code to your team, with a document on how to run it.',
      },
    ],
    linkLabel: 'Read how we work in detail',
  },
  cta: {
    title: "Write to us about what you're working on",
    text: "A few sentences are enough. We'll say plainly what we can take on and what we can't.",
    button: 'Write to us',
  },
};
