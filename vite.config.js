import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    eslint(),
    // Include viteStaticCopy as workaround to https://github.com/vitejs/vite/issues/7362#issuecomment-2043306650
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
