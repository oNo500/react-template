import { env } from '@/config/env';

const enableMocking = async () => {
  if (env.MODE !== 'development') {
    return;
  }
  const { worker } = await import('./browser');
  await worker.start({
    onUnhandledRequest: 'bypass',
  });
};

export default enableMocking;
