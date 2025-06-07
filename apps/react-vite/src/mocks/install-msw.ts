import { env } from '@/config/env';

const enableMocking = async () => {
  if (env.DEPLOY_ENV !== 'development' || env.ENABLE_MOCK === 'false') {
    return;
  }
  const { worker } = await import('./browser');
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
};

export default enableMocking;
