import { AppProvider } from "@/app/provider";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";

// TODO: 这里的layout如何理解？有什么影响，为什么这么设计？
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>;
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
