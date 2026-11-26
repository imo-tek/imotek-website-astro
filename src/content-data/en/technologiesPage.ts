import type { TechnologiesPageContent } from '../types';

export const technologiesPage: TechnologiesPageContent = {
  seo: {
    title: 'Technologies: languages, cloud and DevOps tools',
    description:
      'We build and run software with Java, Kotlin, Go, Python, React, Next.js, Flutter, PostgreSQL, Kafka, AWS, Azure, Google Cloud and Kubernetes.',
  },
  title: 'Technologies',
  intro: 'These are the tools we build software with and run it on in production.',
  groups: {
    languages: {
      title: 'Programming languages',
      text: "We write backends in Java, Kotlin, Go and Python, and front ends in TypeScript. Your team's language and the project decide which one.",
    },
    backend: {
      title: 'Backend',
      text: 'We build APIs, background jobs, sign-in and integrations with other systems with these tools.',
    },
    frontend: {
      title: 'Web front end',
      text: 'We build admin panels, customer portals and company websites. If your front end is already in Vue or Angular, we carry on in it.',
    },
    mobile: {
      title: 'Mobile',
      text: 'We ship iOS and Android apps from one codebase with React Native or Flutter. When a part has to be platform-specific, we write it in Swift and Kotlin.',
    },
    data: {
      title: 'Data',
      text: 'We design the database and set up full-text and semantic search, queues and caching.',
    },
    cloud: {
      title: 'Cloud',
      text: 'We set up your cloud account and move your application onto it. We pick the provider with you, based on cost and the country your data has to stay in.',
    },
    ops: {
      title: 'DevOps and infrastructure',
      text: 'We automate builds and deployments and manage servers and Kubernetes clusters as code.',
    },
    observability: {
      title: 'Monitoring',
      text: 'We set up metrics, logs and alerts, so when something breaks you can see which service failed and when.',
    },
    testing: {
      title: 'Testing',
      text: 'Unit tests, integration tests against a real database and browser tests run on every change. When it matters, a load test shows how much traffic the system can take.',
    },
    ai: {
      title: 'AI',
      text: 'We add features that search documents and answer questions about them. We built the assistant in Turklex with LangChain4j.',
    },
  },
  closing: "If you run something that isn't on this list, write to us and we'll tell you whether we know it.",
  cta: {
    title: 'Tell us what you run',
    text: "Describe what your current system is built on. We'll tell you which parts we can help with.",
    button: 'Write to us',
  },
};
