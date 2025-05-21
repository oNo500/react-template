// import { loadEnvConfig } from '@next/env';
import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

const nextConfig: NextConfig = (
  phase: string,
  { defaultConfig }: { defaultConfig: NextConfig },
) => ({
  transpilePackages: ['@repo/ui'],
  ...(phase === PHASE_DEVELOPMENT_SERVER ? {} : {}),
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
});

export default nextConfig;
