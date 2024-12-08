import { Suspense } from "react";

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return <>
  
  <Suspense fallback={
    <div>Loading...</div>
  }></Suspense>
  {children}</>;
};
