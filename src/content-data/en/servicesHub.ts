import type { ServicesHubContent } from '../types';

export const servicesHub: ServicesHubContent = {
  seo: {
    title: 'Services: software development and cloud',
    description:
      'Java backend, React front ends, mobile apps, AWS infrastructure, DevOps and system design. Each service says in one line when it is the right pick for you.',
  },
  title: 'Services',
  intro: [
    'We take on software and infrastructure work for companies. We can carry a product from its architecture to production, or take one part of it next to your own team.',
    'Each card says when that service is the right pick. Most jobs touch more than one card: a new API usually comes with a database and a deployment pipeline to set up.',
    "The languages and tools we work with are on the technologies page. If your system is built on something that isn't listed, we'll say in our first reply whether we can take the job.",
  ],
  groups: [
    { title: 'Software development', serviceKeys: ['backend', 'frontend', 'mobile'] },
    { title: 'Cloud and infrastructure', serviceKeys: ['aws', 'ops', 'architecture'] },
  ],
  sections: [
    {
      id: 'in-every-service',
      title: 'The same in every service',
      bullets: [
        "Before work starts, we put in writing what we'll do and what we won't.",
        'Code arrives in small pieces, as pull requests with their tests.',
        'Every change runs in a test environment before it reaches production.',
        'When the job ends, your team gets the code and a document on how to run it.',
      ],
      link: { label: 'Read how we work', to: 'howWeWork' },
    },
    {
      id: 'not-on-this-list',
      title: "Work that isn't on this list",
      paragraphs: [
        "We don't do branding, corporate identity, advertising or content marketing, and we don't rent out people by the day. When we work next to your team, the part we take on still has a written scope and a result.",
      ],
    },
  ],
  cta: {
    title: "If you're not sure which one fits",
    text: "Describe the situation in a few sentences. We'll tell you which service would help, or that none of them would.",
    button: 'Write to us',
  },
  serviceCta: {
    title: 'If this is the work you need',
    text: 'Write a few sentences on what you want to build and what you have today.',
    button: 'Tell us about your project',
  },
};
