import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import * as React from "react";
type AppProviderProps = {
  children: React.ReactNode;
};
const MainErrorFallback = () => {
  return (
    <div>
      <h1>Something went wrong</h1>
    </div>
  );
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary errorComponent={MainErrorFallback}>
        {children}
      </ErrorBoundary>
    </React.Suspense>
  );
};
