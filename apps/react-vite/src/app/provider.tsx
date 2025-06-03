import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ThemeProvider } from 'next-themes';

import { GlobalError } from '@/components/errors/global-error';
import { env } from '@/config/env';
import { queryClient } from '@/lib/query-client';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<GlobalError />}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
          {env.MODE === 'development' && <ReactQueryDevtools />}
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
