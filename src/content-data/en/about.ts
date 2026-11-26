import type { AboutContent } from '../types';

export const about: AboutContent = {
  seo: {
    title: 'About: a software company in Ankara, Turkey',
    description:
      'IMOTEK, founded in September 2024, is a software company at ASO Teknopark in Ankara. We do software and cloud consulting and build our own product, Turklex.',
  },
  title: 'About',
  intro: [
    "IMOTEK is a software company founded in September 2024. Our legal name is İMOTEK Yazılım Anonim Şirketi, and we're based at ASO Teknopark in Ankara, Turkey (UTC+3).",
    'We do two things. We build software for companies and set up the infrastructure it runs on. We also build and run Turklex, our legal platform for lawyers.',
  ],
  sections: [
    {
      id: 'consulting',
      title: 'Software and cloud consulting',
      paragraphs: [
        'We take on work in six areas: Java backend development, React web front ends, mobile app development, AWS cloud infrastructure, DevOps and infrastructure, and system design and architecture.',
        'We can run a job from start to finish, or take one part of it next to your own team.',
      ],
      link: { label: 'See each service', to: 'services' },
    },
    {
      id: 'turklex',
      title: 'Turklex',
      paragraphs: [
        "Turklex is an AI legal platform for lawyers and law firms in Turkey. It puts legislation and case-law search, an AI assistant, document drafting and case management in one place. A Chrome extension brings case files over from UYAP, the Turkish courts' online system, and our connector for Claude and ChatGPT lets lawyers search legislation and case law from either assistant.",
        "Turklex is live and on sale. We develop it with support from TÜBİTAK's 1507 SME R&D Start-up Support Programme.",
      ],
      link: { label: 'Read how we built Turklex', to: 'turklex' },
    },
    {
      id: 'we-run-our-own-product',
      title: 'We run our own product',
      paragraphs: [
        "We manage Turklex's code and its infrastructure ourselves. When a release goes out or a service slows down, there's no other team to pass the problem to.",
        'Most of the tools we recommend to clients are in daily use in Turklex. We define its infrastructure with Terraform and Ansible, deploy it with GitHub Actions and monitor it with OpenTelemetry and Grafana. Upgrading and maintaining those tools is our job too.',
        "Turklex's application and databases run on our own servers, and it reaches AI models through external providers' APIs. Its backend is built on Quarkus. That's why we don't point to Turklex as evidence for our AWS or Spring Boot services.",
      ],
    },
    {
      id: 'what-we-dont-do',
      title: "What we don't do",
      bullets: [
        'Branding, corporate identity, advertising or content marketing.',
        'Reselling packaged software or licences.',
        'Renting out people by the day. When we work next to your team, the part we take on still has a written scope and a result.',
        "Work whose result we can't take responsibility for.",
      ],
      link: { label: 'Read how we work', to: 'howWeWork' },
    },
  ],
  companyTitle: 'Company details',
  cta: {
    title: "If you're thinking of working with us",
    text: "Write a few sentences on what you're working on. We'll tell you whether it's a job for us.",
    button: 'Write to us',
  },
};
