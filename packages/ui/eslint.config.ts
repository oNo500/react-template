import { config as reactInternalConfig } from '@kit101/eslint-config/react-internal';

const config = [
  ...reactInternalConfig,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off', // 由于本包不是 Next.js 应用，没有 pages 目录，需关闭该规则以避免报错
    },
  },
];
export default config;
