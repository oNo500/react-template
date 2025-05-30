import { Analytics } from '@vercel/analytics/next';

import { env } from '@/core/config/env';

export function VercelAnalytics() {
  return env.NODE_ENV !== 'development' ? <Analytics /> : null;
}
