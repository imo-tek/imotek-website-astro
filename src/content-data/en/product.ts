import type { ProductContent } from '../types';

export const product: ProductContent = {
  seo: {
    title: 'Turklex: AI Legal Platform for Lawyers in Turkey',
    description:
      'Turklex is the legal software IMOTEK builds and runs for lawyers in Turkey: UYAP integration, legislation and case-law search, drafting and case tracking.',
  },
  title: 'Turklex: an AI legal platform for lawyers in Turkey',
  intro: [
    "Turklex is legal software we build for lawyers and law firms in Turkey. A lawyer brings a case file over from UYAP, the Turkish courts' e-filing system, and then searches legislation and case law, drafts the petition and tracks the case on the same screen.",
    'It is live and sold on paid plans. We write the software and operate the servers it runs on. Turklex is built for Turkish law, and its website is in Turkish.',
  ],
  facts: [
    {
      label: 'Who it is for',
      value: 'Lawyers and law firms in Turkey, from a solo practice to a corporate legal department',
    },
    {
      label: 'Modules',
      value:
        'UYAP integration, AI assistant, legislation and case law, documents and filings, case and practice management',
    },
    { label: 'Add-ons', value: 'A Chrome extension for UYAP and a connector for Claude and ChatGPT' },
    { label: 'Status', value: 'Live, sold on paid plans' },
    { label: 'Pricing, trial and sign-up', value: 'turklex.ai' },
    { label: 'Built by', value: 'İMOTEK Yazılım A.Ş.' },
    { label: 'R&D funding', value: 'TÜBİTAK 1507 SME R&D Start-Up Support Program' },
  ],
  sections: [
    {
      id: 'modules',
      title: 'Modules',
      items: [
        {
          title: 'UYAP integration',
          text: 'A case file arrives in one step, with its documents. You can search it and start working on it as soon as it loads. UDF, PDF and XML documents open inside the app.',
        },
        {
          title: 'AI assistant',
          text: 'Before a petition is drafted, the assistant checks the time limit, any mandatory preliminary step, subject-matter and territorial jurisdiction, and standing. If it finds an obstacle, it tells you and gives the reason.',
        },
        {
          title: 'Legislation and case law',
          text: 'Describe the facts in a sentence and Turklex returns decisions with similar material facts. Legislation comes back article by article, with repealed provisions marked.',
        },
        {
          title: 'Documents and filings',
          text: "A drafted document comes with its legal grounds and the parties' details from the case file already in place. Every citation links to its source, and you can search inside incoming documents too.",
        },
        {
          title: 'Case and practice management',
          text: 'Case types as defined under Turkish law, hearings and expenses, tracked on one screen. Research and drafting draw on these records, so you enter information once.',
        },
      ],
      link: { label: 'Ask for a demo to see the screens (in Turkish)', to: 'https://turklex.ai/demo' },
    },
    {
      id: 'extension-and-connector',
      title: 'The Chrome extension and the Claude and ChatGPT connector',
      items: [
        {
          title: 'Chrome extension',
          text: "It moves the case list, parties, hearings and documents from the UYAP lawyer portal into Turklex. The lawyer starts each transfer, and the extension doesn't run by itself in the background. When a notice served through UETS, the electronic notification system, states a deadline in its document, Turklex proposes a task for that date and the lawyer approves it.",
        },
        {
          title: 'Claude and ChatGPT connector',
          text: "If you use Claude or ChatGPT, you can add Turklex as a connector and search legislation and case law from inside the chat. Search is the only thing the connector can do, and it can't see your firm's files. It is available on paid plans and during the trial.",
        },
      ],
    },
    {
      id: 'limits',
      title: 'Limits',
      paragraphs: [
        'The lawyer makes the decisions. They read what Turklex drafts and check the sources it finds, and the responsibility stays with them.',
        'Turklex reads the deadline written in a served document and proposes it as a task. It does not calculate deadlines from the statute.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much does Turklex cost?',
      a: 'Plans and prices are on the pricing page at turklex.ai, in Turkish. The trial and sign-up are there too.',
    },
    {
      q: "Where is a firm's data stored?",
      a: "Customer content is stored on servers in Turkey. The AI models run at a provider outside Turkey. Each request sends the model only the content that request needs, the provider doesn't keep it, and it isn't used to train models. The details are in the data processing agreement on turklex.ai, which you can read without signing up.",
    },
    {
      q: 'Which sources does Turklex search?',
      a: 'Legislation, and decisions of the Court of Cassation (Yargıtay), the Council of State (Danıştay), the Constitutional Court, the Court of Accounts (Sayıştay) and the Court of Jurisdictional Disputes, as well as precedent decisions. You can open the full text of a decision inside Turklex.',
    },
  ],
  external: {
    title: 'Pricing, trial and sign-up',
    text: "Plans, prices, the trial and sign-up are all on turklex.ai. If you'd like to go through the screens with someone, you can ask for a demo there.",
    button: 'Go to turklex.ai',
  },
  cta: {
    title: "If you're building something similar",
    text: "If your product has search, queues or a language model in it, we can tell you how we built those parts of Turklex and what we'd suggest for your system.",
    button: 'Write to us',
  },
};
