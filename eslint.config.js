import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import react from '@eslint-react/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default tseslint.config(
  // 忽略 .gitignore 中的文件
  includeIgnoreFile(gitignorePath),

  // 其他的一些插件
  ...tailwindcssPlugin.configs['flat/recommended'],

  // 通用
  js.configs.recommended,
  tseslint.configs.recommended,

  {
    files: ['./src/**/*.{ts,tsx}'],
    ...react.configs.recommended,
  },
  {
    files: ['./src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  // 通用规则
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  prettierConfig,
);
