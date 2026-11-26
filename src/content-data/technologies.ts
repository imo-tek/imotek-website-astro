import type { Technology } from './types';

/**
 * Technologies shown on /teknolojiler/ and as chips on service pages.
 * Shared by both locales: names are product names and are not translated.
 *
 * - `key` is the anchor id on the technologies page; `techKeys` in services.ts point here.
 * - `icon` is an Iconify name from the `logos`, `simple-icons` or `tabler` sets. The sets in
 *   use are registered in astro.config.ts automatically. Monochrome icons take `color`.
 * - Order inside a group is display order. Group texts live in tr/ and en/technologiesPage.ts.
 */
export const technologies: Technology[] = [
  // Programming languages
  { key: 'java', name: 'Java', group: 'languages', icon: 'logos:java' },
  { key: 'kotlin', name: 'Kotlin', group: 'languages', icon: 'logos:kotlin-icon' },
  { key: 'go', name: 'Go', group: 'languages', icon: 'logos:go' },
  { key: 'python', name: 'Python', group: 'languages', icon: 'logos:python' },
  { key: 'typescript', name: 'TypeScript', group: 'languages', icon: 'logos:typescript-icon' },
  { key: 'javascript', name: 'JavaScript', group: 'languages', icon: 'logos:javascript' },

  // Backend frameworks
  { key: 'spring-boot', name: 'Spring Boot', group: 'backend', icon: 'logos:spring-icon' },
  { key: 'quarkus', name: 'Quarkus', group: 'backend', icon: 'logos:quarkus-icon' },
  { key: 'hibernate', name: 'Hibernate', group: 'backend', icon: 'logos:hibernate' },
  { key: 'nodejs', name: 'Node.js', group: 'backend', icon: 'logos:nodejs-icon' },
  { key: 'nestjs', name: 'NestJS', group: 'backend', icon: 'logos:nestjs' },
  { key: 'fastapi', name: 'FastAPI', group: 'backend', icon: 'logos:fastapi-icon' },
  { key: 'django', name: 'Django', group: 'backend', icon: 'logos:django-icon' },
  { key: 'graphql', name: 'GraphQL', group: 'backend', icon: 'logos:graphql' },
  { key: 'grpc', name: 'gRPC', group: 'backend', icon: 'logos:grpc' },
  { key: 'openapi', name: 'OpenAPI', group: 'backend', icon: 'logos:openapi-icon' },
  { key: 'keycloak', name: 'Keycloak', group: 'backend', icon: 'simple-icons:keycloak', color: '#4D4D4D' },

  // Web front end
  { key: 'react', name: 'React', group: 'frontend', icon: 'logos:react' },
  { key: 'nextjs', name: 'Next.js', group: 'frontend', icon: 'logos:nextjs-icon' },
  { key: 'vue', name: 'Vue.js', group: 'frontend', icon: 'logos:vue' },
  { key: 'angular', name: 'Angular', group: 'frontend', icon: 'logos:angular-icon' },
  { key: 'vite', name: 'Vite', group: 'frontend', icon: 'logos:vitejs' },
  { key: 'astro', name: 'Astro', group: 'frontend', icon: 'logos:astro-icon' },
  { key: 'tailwind-css', name: 'Tailwind CSS', group: 'frontend', icon: 'logos:tailwindcss-icon' },
  { key: 'storybook', name: 'Storybook', group: 'frontend', icon: 'logos:storybook-icon' },

  // Mobile
  { key: 'react-native', name: 'React Native', group: 'mobile', icon: 'logos:react' },
  { key: 'expo', name: 'Expo', group: 'mobile', icon: 'logos:expo-icon' },
  { key: 'flutter', name: 'Flutter', group: 'mobile', icon: 'logos:flutter-icon' },
  { key: 'swift', name: 'Swift', group: 'mobile', icon: 'logos:swift' },
  { key: 'android', name: 'Android', group: 'mobile', icon: 'logos:android-icon' },
  { key: 'capacitor', name: 'Capacitor', group: 'mobile', icon: 'simple-icons:capacitor', color: '#119EFF' },

  // Data
  { key: 'postgresql', name: 'PostgreSQL', group: 'data', icon: 'logos:postgresql' },
  { key: 'mysql', name: 'MySQL', group: 'data', icon: 'logos:mysql-icon' },
  { key: 'mongodb', name: 'MongoDB', group: 'data', icon: 'logos:mongodb-icon' },
  { key: 'redis', name: 'Redis', group: 'data', icon: 'logos:redis' },
  { key: 'elasticsearch', name: 'Elasticsearch', group: 'data', icon: 'logos:elasticsearch' },
  { key: 'opensearch', name: 'OpenSearch', group: 'data', icon: 'logos:opensearch-icon' },
  { key: 'qdrant', name: 'Qdrant', group: 'data', icon: 'logos:qdrant-icon' },
  { key: 'kafka', name: 'Apache Kafka', group: 'data', icon: 'logos:kafka-icon' },
  { key: 'rabbitmq', name: 'RabbitMQ', group: 'data', icon: 'logos:rabbitmq-icon' },

  // Cloud
  { key: 'aws', name: 'AWS', group: 'cloud', icon: 'logos:aws' },
  { key: 'google-cloud', name: 'Google Cloud', group: 'cloud', icon: 'logos:google-cloud' },
  { key: 'azure', name: 'Microsoft Azure', group: 'cloud', icon: 'logos:microsoft-azure' },
  { key: 'cloudflare', name: 'Cloudflare', group: 'cloud', icon: 'logos:cloudflare-icon' },
  { key: 'hetzner', name: 'Hetzner', group: 'cloud', icon: 'simple-icons:hetzner', color: '#D50C2D' },
  { key: 'digitalocean', name: 'DigitalOcean', group: 'cloud', icon: 'logos:digital-ocean-icon' },
  { key: 'firebase', name: 'Firebase', group: 'cloud', icon: 'logos:firebase-icon' },
  { key: 'vercel', name: 'Vercel', group: 'cloud', icon: 'logos:vercel-icon' },

  // DevOps and infrastructure
  { key: 'docker', name: 'Docker', group: 'ops', icon: 'logos:docker-icon' },
  { key: 'kubernetes', name: 'Kubernetes', group: 'ops', icon: 'logos:kubernetes' },
  { key: 'helm', name: 'Helm', group: 'ops', icon: 'logos:helm' },
  { key: 'argo-cd', name: 'Argo CD', group: 'ops', icon: 'logos:argo-icon' },
  { key: 'terraform', name: 'Terraform', group: 'ops', icon: 'logos:terraform-icon' },
  { key: 'ansible', name: 'Ansible', group: 'ops', icon: 'logos:ansible' },
  { key: 'github-actions', name: 'GitHub Actions', group: 'ops', icon: 'logos:github-actions' },
  { key: 'gitlab-ci', name: 'GitLab CI', group: 'ops', icon: 'logos:gitlab-icon' },
  { key: 'jenkins', name: 'Jenkins', group: 'ops', icon: 'logos:jenkins' },
  { key: 'linux', name: 'Linux', group: 'ops', icon: 'logos:linux-tux' },
  { key: 'nginx', name: 'Nginx', group: 'ops', icon: 'logos:nginx' },
  { key: 'proxmox', name: 'Proxmox', group: 'ops', icon: 'simple-icons:proxmox', color: '#E57000' },

  // Monitoring
  { key: 'prometheus', name: 'Prometheus', group: 'observability', icon: 'logos:prometheus' },
  { key: 'grafana', name: 'Grafana', group: 'observability', icon: 'logos:grafana' },
  { key: 'opentelemetry', name: 'OpenTelemetry', group: 'observability', icon: 'logos:opentelemetry-icon' },
  { key: 'sentry', name: 'Sentry', group: 'observability', icon: 'logos:sentry-icon' },
  { key: 'kibana', name: 'Kibana', group: 'observability', icon: 'logos:kibana' },

  // Testing (Testcontainers has no logo in the icon sets; a generic icon instead of a borrowed mark)
  { key: 'junit', name: 'JUnit 5', group: 'testing', icon: 'simple-icons:junit5', color: '#25A162' },
  { key: 'testcontainers', name: 'Testcontainers', group: 'testing', icon: 'tabler:packages', color: '#291A3F' },
  { key: 'playwright', name: 'Playwright', group: 'testing', icon: 'logos:playwright' },
  { key: 'vitest', name: 'Vitest', group: 'testing', icon: 'logos:vitest' },
  { key: 'k6', name: 'k6', group: 'testing', icon: 'simple-icons:k6', color: '#7D64FF' },
  { key: 'sonarqube', name: 'SonarQube', group: 'testing', icon: 'simple-icons:sonarqube', color: '#4E9BCD' },
  { key: 'postman', name: 'Postman', group: 'testing', icon: 'logos:postman-icon' },

  // AI (LangChain4j has no official logo; a generic icon instead of a borrowed mark)
  { key: 'langchain4j', name: 'LangChain4j', group: 'ai', icon: 'tabler:link', color: '#1c3c3c' },
  { key: 'spring-ai', name: 'Spring AI', group: 'ai', icon: 'logos:spring-icon' },
  { key: 'langchain', name: 'LangChain', group: 'ai', icon: 'simple-icons:langchain', color: '#1C3C3C' },
  { key: 'ollama', name: 'Ollama', group: 'ai', icon: 'simple-icons:ollama', color: '#000000' },
  { key: 'hugging-face', name: 'Hugging Face', group: 'ai', icon: 'logos:hugging-face-icon' },
  { key: 'mcp', name: 'MCP', group: 'ai', icon: 'simple-icons:modelcontextprotocol', color: '#000000' },
];
