'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from 'next-themes';

import { queryClient } from '@/lib/query-client';
import { VercelAnalytics } from '@/lib/vercel-analytics';
import { WebVitals } from '@/lib/web-vitals';

interface ProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        <WebVitals />
        <VercelAnalytics />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
