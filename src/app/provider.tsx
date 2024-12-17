import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryConfig } from '@/lib/react-query';
import { Notifications } from '@/components/ui/notifications';

const MainErrorFallback = () => {
  return <div className="flex h-screen w-screen items-center justify-center">Error</div>;
};

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );
  return (
    <>
      <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center">Loading...</div>}>
        <ErrorBoundary FallbackComponent={MainErrorFallback}>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              {import.meta.env.DEV && <ReactQueryDevtools />}
              {/* // TODO 通知 */}
              {/* // 是否具有登录权限 */}
              {children}
            </QueryClientProvider>
          </HelmetProvider>
        </ErrorBoundary>
        <Notifications />
      </Suspense>
    </>
  );
};
