import type { Service } from '../types';

/**
 * Services. All six entries are written to the same fields and the same depth.
 * Order here is the card order on the home page and the services hub.
 * URLs live in `src/i18n/routes.ts`; there are no slugs in this file.
 */
export const services: Service[] = [
  {
    key: 'backend',
    navTitle: 'Java backend development',
    title: 'Java backend development',
    summary:
      'We write the server side of your application in Java or Kotlin. That covers the API, the database schema, queues and the integrations with outside systems.',
    chooseIf: 'You need an API or a service written and you want it to run on the JVM.',
    seo: {
      title: 'Java backend development: Spring Boot and Quarkus',
      description:
        'We write APIs and integrations in Java and Kotlin, on Spring Boot or Quarkus, with data in PostgreSQL and tests in every pull request. Tell us what you need.',
    },
    intro: [
      "The backend is the part of an application users never see. It holds the business rules and the data, and it's where the code that talks to payment or SMS providers lives.",
      'We write that part on the JVM, in Java or Kotlin, with Spring Boot or Quarkus as the framework. Which one we pick depends on what your team already knows and where the system will run.',
      'The backend of Turklex, our own product, is written in Kotlin on Quarkus and runs with PostgreSQL, Elasticsearch, RabbitMQ and Redis. Turklex has no Spring Boot in it. We suggest Spring Boot because most Java teams already know it.',
    ],
    whatWeDo: [
      {
        title: 'REST API design and development',
        text: 'Before any code, we write the endpoints and error responses down as a contract. Web and mobile work can start against that contract while the API is still being built.',
      },
      {
        title: 'Database schema and migrations',
        text: 'We design the schema on PostgreSQL. Every schema change is a migration file kept in version control, so the test and production environments go through the same steps.',
      },
      {
        title: 'Background jobs and queues',
        text: 'Long-running work such as file processing or report generation is taken out of the request and put on a queue. We use RabbitMQ for this.',
      },
      {
        title: 'Integrations with outside systems',
        text: "We write the integrations with payment, SMS and e-mail providers. From the start we design what happens when the other side doesn't answer: the timeouts and the retries.",
      },
      {
        title: 'Search',
        text: "Where a database query isn't enough, we set up full-text search with Elasticsearch and vector search with Qdrant.",
      },
      {
        title: 'Tests',
        text: 'We write the code together with its tests. The tests run automatically on every pull request.',
      },
    ],
    goodFit: [
      'Your web or mobile application needs an API.',
      'There are operations where consistency matters: approval flows, permissions, money or stock movements.',
      'The system will live for years and more than one person will work on it.',
      'Your team knows Java or Kotlin and wants to stay with it.',
    ],
    notFit: [
      "You're building a prototype that will be tried for a few weeks and maybe dropped. The structure the JVM brings is a burden at that size, and a lighter tool will do.",
      'You want a content-heavy marketing site. A static site is enough for that, with no backend to write.',
      'Your team works in another language such as Go or Python and wants to keep it. Then the new service is better written in that language too.',
    ],
    techKeys: [
      'java',
      'kotlin',
      'spring-boot',
      'quarkus',
      'postgresql',
      'rabbitmq',
      'redis',
      'elasticsearch',
      'qdrant',
      'langchain4j',
      'mcp',
    ],
    process: [
      {
        title: 'First call',
        text: 'We ask what the system has to do and which other systems it will talk to. If there is existing code or data, we look at that too.',
      },
      {
        title: 'Scope and design',
        text: "We write the API contract and the data model. What is part of the job and what isn't sits in the same document.",
      },
      {
        title: 'Development',
        text: 'We work in small pieces. Each piece is opened as a pull request with its tests and goes out to a test environment.',
      },
      {
        title: 'Release',
        text: 'Production and its monitoring get set up at this step. The infrastructure side can also run as a separate piece of work.',
      },
      {
        title: 'Handover',
        text: 'We write down how the code is built and released, and walk your team through it.',
      },
    ],
    faqs: [
      {
        q: 'Spring Boot or Quarkus?',
        a: 'Spring Boot if your team knows Spring or the existing code is Spring. For a new service that will run in a container, where fast start-up and low memory use matter, we suggest Quarkus. Both use the same JVM libraries, so the decision usually comes down to what the team is used to.',
      },
      {
        q: 'Java or Kotlin?',
        a: 'Both run on the same JVM and use the same libraries. If your team writes Java, we continue in Java. When the choice on a new project is left to us, we prefer Kotlin, which is what the Turklex backend is written in.',
      },
      {
        q: 'Which Java version do you work with?',
        a: 'New projects start on a current LTS release. Turklex runs on JVM 21. For projects stuck on an old release, the upgrade is planned as its own piece of work.',
      },
      {
        q: 'Our own team writes the front end. Can you work on the backend only?',
        a: 'Yes. In that case we start with the API contract. Your team builds the front end against it while we write the backend.',
      },
    ],
    relatedKeys: ['architecture', 'ops', 'frontend'],
  },
  {
    key: 'frontend',
    navTitle: 'React web front ends',
    title: 'React web front ends',
    summary:
      'We build the screens people work in, such as admin panels and forms, in React and TypeScript, and connect them to your backend API.',
    chooseIf:
      'You need the screens of a web application where people sign in and spend the day entering or looking up data.',
    seo: {
      title: 'React web application development: admin panels',
      description:
        'We build admin panels, forms and data screens in React and TypeScript and connect them to your API. The Turklex web app is built the same way. Tell us more.',
    },
    intro: [
      'In a web application, people spend their day in lists and forms. If those screens are slow, or accept bad data, whoever uses them runs into it every day.',
      "We write those screens in React and TypeScript and connect them to the backend API. The shape of the API's data is typed in TypeScript, so when a field is renamed, the build fails before any user sees the bug.",
      'We built the Turklex web application with React, TypeScript and Vite. The case records lawyers keep and the editor they draft petitions in are both part of it.',
    ],
    whatWeDo: [
      {
        title: 'Admin panels and lists',
        text: 'We build tables you can filter and sort. Once the record count grows, filtering and paging move to the server, and the browser only receives the page on screen.',
      },
      {
        title: 'Forms',
        text: 'We write multi-step forms and field validation. The check in the browser is there to give the user quick feedback. The backend does the real check.',
      },
      {
        title: 'Connecting to the API',
        text: "Every screen gets its loading, error and empty states. Data from the API is cached, so moving back and forth between screens doesn't send the same request again and again.",
      },
      {
        title: 'Viewing and exporting documents',
        text: 'In Turklex, PDF and Word files open in the browser, and text written in the TipTap-based editor downloads as PDF or DOCX.',
      },
      {
        title: 'Chrome extensions',
        text: 'We wrote the Turklex Chrome extension. The lawyer starts the transfer, and the extension brings case and document data from the UYAP lawyer portal into Turklex.',
      },
      {
        title: 'Tests',
        text: 'We test that a form rejects bad input, or that a user without the right permission never sees a button. The tests are written with Vitest and Testing Library.',
      },
      {
        title: 'Build and release',
        text: 'Vite builds the front end into static files. We publish them on Cloudflare Pages or on your own server. The Turklex web app is served from Cloudflare Pages.',
      },
    ],
    goodFit: [
      'Your staff or your customers spend the day in the same screens, entering records and looking them up.',
      'Work that runs in Excel today should move into an application in the browser.',
      'The API is ready or being written, and nobody is free to build the front end.',
      'Your users will open PDF or Word documents inside the application and work on them.',
    ],
    notFit: [
      "You only want a marketing site or a blog. That doesn't need a React application. We build sites like that with Astro, and this site is one of them.",
      'Your front end is written in Vue or Angular and will stay that way. Carrying on in that framework makes more sense than moving to React.',
    ],
    techKeys: ['react', 'typescript', 'vite', 'astro', 'tailwind-css', 'cloudflare'],
    process: [
      {
        title: 'Screen list',
        text: 'We list the screens and the data each one expects from the API.',
      },
      {
        title: 'Checking against the API',
        text: 'We compare that list with the API as it stands. Missing endpoints show up before development starts and go to the backend side then.',
      },
      {
        title: 'One screen at a time',
        text: "We finish screens one by one. You can open and try each change at a test address before it's released.",
      },
      {
        title: 'Release and handover',
        text: 'We release the built front end and give your team a document on how it is built and published.',
      },
    ],
    faqs: [
      {
        q: 'React or Astro?',
        a: 'React when people sign in and work with data. Astro when the pages are mostly there to be read. The two can sit side by side: turklex.ai is built with Astro, and app.turklex.ai, where lawyers sign in, with React.',
      },
      {
        q: "Our backend isn't Java. Will you still build the front end?",
        a: "Yes. The front end talks to the backend over HTTP, so the language the backend is written in doesn't affect it. If your API is documented we work from that. If it isn't, we start by listing the endpoints with you.",
      },
      {
        q: "We don't have a design. What will the screens be based on?",
        a: "If you have a design, we build components that match it. If you don't, a ready-made component library speeds up internal screens such as admin panels. In Turklex we use Ant Design.",
      },
    ],
    relatedKeys: ['backend', 'mobile', 'ops'],
  },
  {
    key: 'mobile',
    navTitle: 'Mobile app development',
    title: 'Mobile app development',
    summary:
      'We build mobile apps for iOS and Android. We can write the API the app talks to as well, or connect it to the backend you already have.',
    chooseIf:
      "People will open your product on their phones every day, and a mobile-friendly web page won't do the job.",
    seo: {
      title: 'Mobile App Development for iOS and Android',
      description:
        'We build iOS and Android apps, write the API behind them or connect them to your backend, and prepare the store submissions. Tell us what you want to build.',
    },
    intro: [
      'We build mobile apps for iOS and Android. We can write the API the app talks to in Java or Kotlin, or connect the app to the backend you already have. If you also have a web application, one API can usually serve both.',
      "On mobile, every new release goes through Apple's and Google's review before it reaches users. Old versions keep running on phones until people update, so the API has to change without breaking them. Push notifications go out through the two companies' own notification services.",
    ],
    whatWeDo: [
      {
        title: 'Scope of the first release',
        text: 'We agree with you which screens and which phone features go into the first release. Everything that waits goes on a separate list.',
      },
      {
        title: 'The iOS and Android app',
        text: "We write the app for both platforms, and plan from the start for what each screen does when the screen size or the phone's text size setting changes.",
      },
      {
        title: 'Sign-in',
        text: "Users sign in once, and the session is kept in the phone's secure storage: the Keychain on iOS, the Keystore on Android. An expired session renews without the user having to do anything.",
      },
      {
        title: 'Push notifications',
        text: "The backend sends the notification, and Apple's and Google's services deliver it to the phone. We also write the backend part that keeps track of devices and decides who gets what.",
      },
      {
        title: 'Version compatibility',
        text: "We change the API in ways that don't break older app versions. From the first release, the app has an update screen that sends users of a version that's too old to the store.",
      },
      {
        title: 'Test builds and store submission',
        text: "During development we share test builds through TestFlight and Google Play's internal testing track. For the submission we prepare the screenshots and the data-use declarations both stores ask for.",
      },
    ],
    goodFit: [
      'People will open the app every day, maybe several times a day.',
      'Phone features such as the camera or location are central to what the app does.',
      'You have a web application and an API, and a mobile app is being added next to them.',
      'You have notifications that need to reach people right away.',
    ],
    notFit: [
      "Your users come to the product now and then. A web application that works well on a phone does the same job for less, and there's no store review to wait for.",
      'You want to put your existing website in an app shell as it is. Apple usually rejects apps that do little more than package a website.',
    ],
    techKeys: [],
    process: [
      {
        title: 'App or web?',
        text: "We talk about how often your users will open the product and which phone features it needs. If you don't need a mobile app, we say so at this step.",
      },
      {
        title: 'Scope and API',
        text: "We write down the screens of the first release and what each one needs from the API. If there's no backend yet, it goes into the same plan.",
      },
      {
        title: 'Test builds',
        text: 'During development you use the app on your own phone, and your feedback goes into the next test build.',
      },
      {
        title: 'Store submission',
        text: 'We submit to both stores and answer the questions that come up during review.',
      },
      {
        title: 'Handover',
        text: 'We hand over the code and a document on how to build a new release and send it to the stores.',
      },
    ],
    faqs: [
      {
        q: 'We have a web application. Can the mobile app use the same backend?',
        a: 'In most cases, yes. One API serves both. Mobile usually needs two additions: an endpoint that keeps track of the devices to notify, and a way to change the API without breaking older app versions. We look at your API at the start and tell you in writing what has to change.',
      },
      {
        q: 'Whose name should the store accounts be in?',
        a: "We suggest your company's. The app shows up in the store under the account holder's name, and as long as the account is yours, so is the app's store listing. You add us to the account as team members.",
      },
      {
        q: 'How much does a mobile app cost?',
        a: 'The number of screens and flows matters most. Whether a backend already exists, features such as the camera or payments, and the outside systems the app connects to also change how long it takes. Once the scope of the first release is written down, we give an estimate for that scope.',
      },
    ],
    relatedKeys: ['backend', 'frontend', 'architecture'],
  },
  {
    key: 'aws',
    navTitle: 'AWS cloud infrastructure',
    title: 'AWS cloud infrastructure',
    summary:
      'We build AWS accounts, networks, servers and databases from Terraform code, and move applications that run elsewhere onto AWS.',
    chooseIf: 'Your application is moving to AWS, or you need a new environment set up there.',
    seo: {
      title: 'AWS cloud consulting: setup and migration',
      description:
        'We set up AWS accounts, networks, servers and databases, and move existing applications onto AWS. The whole setup is Terraform code. Tell us about your setup.',
    },
    intro: [
      'You can start a server from the AWS console in a few clicks. A few months later, in an account built by hand, it gets hard to tell what each resource is for and what it costs each month.',
      'So we build everything on AWS from Terraform code: account settings, the network, servers, databases and access permissions. Because changes happen in code, each one is reviewed as a pull request, and the same environment can be rebuilt in another account.',
      'If your application runs at a hosting company or on your own servers today, we can move it. The migration steps, and how to get back to the old system if something goes wrong, are written down before we start.',
    ],
    whatWeDo: [
      {
        title: 'Accounts and access',
        text: 'We create separate AWS accounts for test and production and group them under AWS Organizations. Everyone on the team signs in as themselves, with only the permissions their work needs. Nobody uses the root account for daily work.',
      },
      {
        title: 'Network',
        text: "We set up the VPC, subnets and security groups. The database sits in a subnet that can't be reached from the internet, and the only thing exposed is the load balancer in front of the application.",
      },
      {
        title: 'Application environment',
        text: 'We package the application as a Docker image and run it on ECS or directly on EC2. Which one depends on how the application is built and what your team can operate.',
      },
      {
        title: 'Database and files',
        text: 'For the database we recommend RDS for PostgreSQL, with automated backups and a retention period set during setup. Files that users upload go to S3.',
      },
      {
        title: 'Migration',
        text: 'We move the application and its data from where it runs today. First we do a trial migration into the test environment with a copy of the data, and time how long the real one will take.',
      },
    ],
    goodFit: [
      'Your application runs at a hosting company or on your own servers and is moving to AWS.',
      'A new product needs test and production environments on AWS.',
      "You'll need the same environment more than once, for example a separate installation for each large customer.",
      'Your team writes the application, but nobody is there to take on the AWS side.',
    ],
    notFit: [
      'Your application fits on one server and its traffic stays about the same all year. A fixed-price virtual server costs less and is easier to run.',
      'You want the same bill every month. AWS charges for what you use, so the bill changes from month to month.',
    ],
    techKeys: ['aws', 'terraform', 'docker', 'postgresql'],
    process: [
      {
        title: 'Where things stand',
        text: "We look at where the application runs, how it's released, how much data there is and what it costs today.",
      },
      {
        title: 'Target setup and cost estimate',
        text: "We draw the setup we'll build on AWS and estimate its monthly cost with the AWS Pricing Calculator. The migration steps and the way back go in the same document.",
      },
      {
        title: 'Test environment',
        text: 'We build the infrastructure from Terraform code in a test account first. You run and try your application there.',
      },
      {
        title: 'Cut-over',
        text: "We build production from the same code, move the data and point the domain at the new environment. The old system stays up until it's clear we won't need to go back.",
      },
      {
        title: 'Handover',
        text: 'We hand over the Terraform code and a document on how to change the environment.',
      },
    ],
    faqs: [
      {
        q: "Why Terraform? Doesn't AWS have its own tools?",
        a: 'It does: CloudFormation and CDK. With Terraform we can keep resources outside AWS, such as DNS or Cloudflare settings, in the same code. We manage our own infrastructure with Terraform as well.',
      },
      {
        q: 'Will the system go down during the migration?',
        a: "Usually there's a short outage. Writes to the old system stop, the last data is copied, and the domain is switched to the new environment. We time that during the trial migration and do the real cut-over at an hour we agree with you. If something goes wrong, the steps for going back to the old system are already in the plan.",
      },
      {
        q: 'How do we keep the monthly AWS bill under control?',
        a: 'We tag resources by environment and purpose, so Cost Explorer can show which part of the bill comes from where. With AWS Budgets we set a monthly limit and an e-mail alert for when spending gets close to it.',
      },
      {
        q: 'Does Turklex run on AWS?',
        a: "No. Turklex runs on our own servers. We use Terraform and Docker there too, but AWS-specific work such as account structure, VPCs or RDS isn't part of Turklex.",
      },
    ],
    relatedKeys: ['ops', 'architecture', 'backend'],
  },
  {
    key: 'architecture',
    navTitle: 'System design and architecture',
    title: 'System design and architecture',
    summary:
      'Before code is written, we decide with you how the system will be built and write the decisions down with their reasons. We also review systems that are already running.',
    chooseIf:
      'You want the decisions in writing before a new system is started, or you want to know why a running system is struggling.',
    seo: {
      title: 'Software Architecture Consulting and System Design',
      description:
        "Before code is written, we set down your system's parts, data model and technology choices, with the reasons. We also review systems that are already running.",
    },
    intro: [
      "The decisions that are hardest to change later are usually made in the first weeks of a system. Two of them are where the data lives and which work runs in the background so users don't have to wait for it.",
      'We make those decisions with you before code is written, and write them down with the reasons. The document also lists the options we turned down and why, so whoever asks six months later why something was done can find the answer there.',
      'We look at running systems the same way. If a system has become slow, or every change breaks something elsewhere, we go through it and write up what we find, most urgent first.',
    ],
    whatWeDo: [
      {
        title: 'Components and data flow',
        text: 'We draw the parts of the system and how data moves between them. The diagram shows which calls have to wait for an answer and which can go on a queue.',
      },
      {
        title: 'Data model',
        text: 'We define the tables, how they relate and where each piece of data originates. How copies such as a search index or a cache get rebuilt from that source is part of the model too.',
      },
      {
        title: 'Technology choices',
        text: "For each choice we write down the reason and the alternative we passed over. Taking a technology you don't need off the list is part of the job.",
      },
      {
        title: 'Review of an existing system',
        text: 'We go through the code, the database schema, the infrastructure and the monitoring data, and hand over a report ordered by what should be fixed first.',
      },
      {
        title: 'Step-by-step migration plan',
        text: "If part of the system has to change, we plan the steps so the system keeps running while it happens. After each step it's still usable.",
      },
    ],
    goodFit: [
      "You're starting a new product and want the first decisions in writing before any code.",
      "You're building software that will serve several companies, and you need to decide how their data is kept apart.",
      'The existing system has slowed down, or every change breaks something else, and you want to know why.',
      'You want the design done from outside and will build it with your own team.',
    ],
    notFit: [
      "A small job where it's already clear what to build. A separate design phase only adds time.",
      "The decisions are made and you're looking for an outside opinion to sign them off. If we do a review, we'll also write down the problems we see.",
    ],
    techKeys: ['postgresql', 'elasticsearch', 'qdrant', 'rabbitmq', 'redis'],
    process: [
      {
        title: 'Constraints',
        text: 'We ask what the system will do, how much data and how many users it will handle, the budget, and which technologies your team knows.',
      },
      {
        title: 'Reading',
        text: 'If a system is already running, we read it first: the code, the database, the infrastructure and past outages. We also talk to the person who knows it best.',
      },
      {
        title: 'Draft',
        text: 'We put together an architecture draft and a list of open questions and go through them with you. The decisions get settled in those conversations.',
      },
      {
        title: 'Document',
        text: 'We collect the decisions, their reasons and the options turned down in one document, along with a step-by-step plan if something has to change.',
      },
      {
        title: 'After the document',
        text: 'If we take on the development, the document becomes the scope. If your team carries on, we read it through with them in a session.',
      },
    ],
    faqs: [
      {
        q: 'Do we need to move to microservices?',
        a: 'Usually not. For a team of a few people, one application is easier to develop and run than many services talking to each other over the network. The Turklex backend is a single application too. Long-running work is split off through queues, and search runs in separate systems. We suggest splitting a part out when it needs to scale on its own or belongs to a separate team.',
      },
      {
        q: "In software that serves many customers, how should we keep each customer's data apart?",
        a: 'Two ways come up most often: a separate database per customer, or shared tables where every record carries the customer it belongs to. Turklex uses the second, and every query is filtered by firm in the application layer. Which one suits you depends on how many customers you have and the data separation they ask for in their contracts.',
      },
      {
        q: 'What do you need from us to review our system?',
        a: "Read access to the code repository and the infrastructure, access to the monitoring dashboards if there are any, and a conversation with the person who knows the system best. We don't need your customer data. The database schema and a few anonymised sample records are usually enough.",
      },
      {
        q: 'What goes into the design document?',
        a: 'What the system has to do and its constraints, a diagram of the components and data flow, the data model, the reason and rejected alternative for each technology choice, known risks and open questions. When an existing system is reviewed, the findings in priority order and a migration plan are added.',
      },
    ],
    relatedKeys: ['backend', 'aws', 'ops'],
  },
  {
    key: 'ops',
    navTitle: 'DevOps and infrastructure',
    title: 'DevOps and infrastructure',
    summary:
      'We automate how code is tested and released, and define servers and monitoring as code. Turklex runs on our own servers this way.',
    chooseIf: 'Releases still go out by hand, or you hear from your users that the system is down.',
    seo: {
      title: 'DevOps consulting: CI/CD, Terraform and monitoring',
      description:
        "We automate releases, set up servers with Ansible and resources with Terraform, and put monitoring in place. It's how we run Turklex. Tell us how you release.",
    },
    intro: [
      "We run Turklex on our own servers. Server setup lives in Ansible, application resources and Cloudflare settings in Terraform, and each environment's services in a Docker Compose definition. Production and test run on separate virtual machines.",
      'Builds and releases run on GitHub Actions. Telemetry is collected with OpenTelemetry and watched in Grafana.',
      "We set up the same kind of system for you. Releases stop depending on one person's memory, and when something breaks, the alert comes to you.",
    ],
    whatWeDo: [
      {
        title: 'Release pipeline (CI/CD)',
        text: 'Tests and the build run on every pull request. Code merged to the main branch goes to the test environment on its own, while a production release waits until someone approves it after trying the change there. Turklex is released this way too.',
      },
      {
        title: 'Server setup',
        text: 'We set up the operating system, users, firewall and services with Ansible. A broken server can be replaced with a new one built from the same code.',
      },
      {
        title: 'Containers and environments',
        text: 'Every service runs as a container. Test and production are built from the same definition and differ only in their settings.',
      },
      {
        title: 'Resources with Terraform',
        text: 'We define queues, storage buckets and DNS records in Terraform, and CI produces the plan. In Turklex, if the production plan would delete a resource, CI fails.',
      },
      {
        title: 'Monitoring and alerts',
        text: 'We collect traces, metrics and logs from the backend. Dashboards and alert rules are written as code and kept in version control. An alert also fires when a server stops sending data.',
      },
      {
        title: 'Backups',
        text: 'Database backups go to storage off the server they come from. We write down the steps for restoring from them.',
      },
    ],
    goodFit: [
      'Releasing depends on manual steps that one person knows. When that person is on leave, nothing ships.',
      'You hear from your users that the system is down.',
      'You run on your own servers and want things in order there before any move to the cloud.',
      'You know backups are being taken, but nobody has ever tried restoring one.',
    ],
    notFit: [
      'Your application runs on a managed platform and releases are already automatic. Building separate infrastructure on top would only create work.',
      'You have a small application on one server that changes once a month. A written release checklist is often enough, and automation can cost more to set up and maintain than it saves.',
    ],
    techKeys: ['docker', 'terraform', 'ansible', 'proxmox', 'github-actions', 'opentelemetry', 'grafana', 'cloudflare'],
    process: [
      {
        title: "Today's release",
        text: 'We sit with whoever does the releases and write down every manual step. We also look at how the system is monitored and where the backups go.',
      },
      {
        title: 'Priority',
        text: 'Together we pick the step that does the most damage when it goes wrong, and start there.',
      },
      {
        title: 'Automation',
        text: 'We build the pipeline and do the first automated release together with your team.',
      },
      {
        title: 'Alerts and a restore test',
        text: 'We set up the alerts and check that they reach you. We do one full restore from backup.',
      },
      {
        title: 'Handover',
        text: 'We leave your team a document on how to roll back a release and how to restore from backup.',
      },
    ],
    faqs: [
      {
        q: "We don't use the cloud. We run on our own servers. Does this service fit us?",
        a: 'It does. Turklex runs on our own servers too. We set up servers with Ansible and run services with Docker, and neither tool cares where the server sits.',
      },
      {
        q: 'Do we need Kubernetes?',
        a: 'Not for a system that fits on a few servers. We run Turklex without Kubernetes, with one Docker Compose definition per environment, and that is easier to set up and to run. Kubernetes earns its overhead when you have to spread dozens of services across many servers.',
      },
      {
        q: "If releases are automatic, won't untested code reach production?",
        a: 'The pipeline ends with an approval step to prevent that. Code passes the tests and goes to the test environment first, and someone starts the production release after looking at it there. Turklex production releases are started by hand the same way.',
      },
      {
        q: 'Where are the backups kept?',
        a: "Off the server. For Turklex, PostgreSQL backups go every night to storage off the server, and uploaded files are kept in a separate, versioned store. Search indexes aren't backed up. They're rebuilt from the source data when needed.",
      },
    ],
    relatedKeys: ['aws', 'backend', 'architecture'],
  },
];
