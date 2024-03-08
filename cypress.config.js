import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 3000,

  retries: {
    runMode: 5,
  },

  e2e: {
    supportFile: false,
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
