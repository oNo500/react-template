import { env } from '@/config/env';

export const enableMocking = async () => {
  console.log('mock', env.ENABLE_API_MOCKING);
  if (env.ENABLE_API_MOCKING) {
    const { worker } = await import('./browser');
    const { initializeDb } = await import('./db');
    await initializeDb();
    return worker.start({
      onUnhandledRequest: 'bypass', // 未处理的请求直接通过
    });
  }
};
