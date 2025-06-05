import { Toaster } from '@kit101/ui/components/sonner';
import '@/styles/index.css';

import { AppProviders } from '@/components/providers';

import type { Metadata } from 'next';

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
        <AppProviders>
          <Toaster />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
