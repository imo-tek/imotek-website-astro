import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      '.netlify.app' // tüm netlify.app subdomainlerini kabul et
    ],
  },
});
