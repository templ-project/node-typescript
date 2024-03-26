import {defineConfig} from 'vite';

export default defineConfig({
  test: {
    include: ['test.vitest/**/*.test.ts'],
    reporters: ['verbose'],
  },
});
