// import { loadEnvConfig } from '@next/env';
import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

const nextConfig: NextConfig = (
  phase: string,
  { defaultConfig }: { defaultConfig: NextConfig },
) => ({
  transpilePackages: ['@repo/ui'],
  ...(phase === PHASE_DEVELOPMENT_SERVER ? {} : {}),
  // 开发环境：Turbopack 配置
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  // 生产构建：Webpack 配置
  webpack: (config: {
    module: { rules: { test: RegExp; use: string[] }[] };
  }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

export default nextConfig;
