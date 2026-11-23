import type { HowWeWorkContent } from '../types';

export const howWeWork: HowWeWorkContent = {
  seo: {
    title: 'How we work: from first message to handover',
    description:
      'How a software or infrastructure job runs at IMOTEK: written scope, pull requests with tests, a test environment first, then the code and a run document.',
  },
  title: 'How we work',
  intro: [
    'Most jobs reach us as an e-mail. They end when your team has the code and the document it needs to run it.',
    'A whole product and a single service go through the same order.',
  ],
  steps: [
    {
      title: 'You tell us where things stand',
      text: "Write a few sentences on what you want to build, what you have today and where it's stuck. If there is existing code or infrastructure, we look at whatever you give us access to.",
    },
    {
      title: 'We tell you whether it fits',
      text: 'If the job falls outside the technologies we use or the work we do, we say so in our first reply. The tools we use are listed on the technologies page.',
    },
    {
      title: 'We write the scope',
      text: "We put in writing what we'll do, what we won't, and the technical result the job ends with. Work starts once you've read and accepted it.",
    },
    {
      title: 'We build in small pieces',
      text: 'We split the work into pieces that can each be reviewed on their own. Each piece is a pull request with its tests, and once merged it goes to a test environment first.',
    },
    {
      title: 'We release to production',
      text: 'A change reaches production only after it has run in the test environment, so you can look at each piece there before it goes live.',
    },
    {
      title: 'We hand over',
      text: 'Your team gets the code and a document that explains how to build, run and deploy it. We go through the document with them.',
    },
    {
      title: 'After handover',
      text: "From here your team can run the system. If you'd like us to carry on, with new features or with running the infrastructure, that's a separate job and it starts with a written scope, like the first one.",
    },
  ],
  sections: [
    {
      id: 'work-we-turn-down',
      title: 'Work we turn down',
      bullets: [
        'Renting out people by the day. When we work alongside your team, the part we take on still has a written scope and a defined result.',
        "Jobs whose result we can't take responsibility for, even in a quiet month.",
        'Branding, corporate identity, advertising and content marketing.',
        'Reselling packaged software or licences.',
      ],
    },
  ],
  faqs: [
    {
      q: 'We have a half-finished project. Will you look at it?',
      a: "Yes. After going through the code and the infrastructure, we say in the written scope which parts we can take on. If we can't take it on, we tell you that.",
    },
    {
      q: 'We have our own team. Can you work on one part only?',
      a: "Yes, for example only the backend or only the deployment pipeline. We still don't supply people by the day. The part we take on has a written scope, and the code arrives the same way, as pull requests with tests.",
    },
  ],
  cta: {
    title: 'The first step is an e-mail',
    text: "Write a few sentences on what you're working on and what you have today.",
    button: 'Write to us',
  },
};
