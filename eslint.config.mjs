import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['node_modules'],
    plugins: {
      js,
      importPlugin,
      eslintConfigPrettier,
    },
    extends: [
      js.configs.recommended,
      importPlugin.flatConfigs.recommended,
      eslintConfigPrettier,
    ],
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'error',
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
      allowForLoopAfterthoughts: 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
]);
