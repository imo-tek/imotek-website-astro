import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      '.netlify.app',
      'devserver-preview--silver-sunshine-3f5578.netlify.app'
    ],
  },
});
