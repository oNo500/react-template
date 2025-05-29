import { Toaster } from '@repo/ui/components/sonner';
import '@repo/ui/styles/globals.css';

import type { Metadata } from 'next';

import { AppProviders, WebVitals } from '@/core/providers';

export const metadata: Metadata = {
  title: 'Nextjs App',
  description: 'Nextjs App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <WebVitals />
        <AppProviders>
          <Toaster />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
