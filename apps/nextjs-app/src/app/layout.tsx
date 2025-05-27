import '@repo/ui/styles/globals.css';

import type { Metadata } from 'next';

import AppProvider from './provider';

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
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
