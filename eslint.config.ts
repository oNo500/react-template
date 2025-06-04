import { config as baseConfig } from '@kit101/eslint-config/base';

const config = [
  ...baseConfig,
  {
    ignorePatterns: ['apps/**', 'packages/**'],
  },
];

export default config;
