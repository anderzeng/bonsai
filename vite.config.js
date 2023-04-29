import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [eslint()],
	root: 'src',
	build: {
		outDir: './dist',
	},
});
