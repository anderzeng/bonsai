import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    eslint(),
    viteStaticCopy({
      targets: [
        {
          src: 'assets/images/bonsai-thumbnail.jpeg',
          dest: 'assets',
        },
      ],
    }),
  ],
  root: 'src',
  build: {
    outDir: '../dist',
  },
});
