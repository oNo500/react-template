import { config as baseConfig } from '@repo/eslint-config/base';

const config = [
  ...baseConfig,
  {
    ignorePatterns: ['apps/**', 'packages/**'],
  },
];

export default config;
