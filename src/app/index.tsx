import { useEffect } from "react";
import { AppProvider } from "./provider";
import { AppRouter } from "./router";
import { api } from "@/lib/api-client";

export const App = () => {
  useEffect(() => {
    api.get(`${import.meta.env.VITE_APP_API_URL}/healthcheck`);
  }, []);
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
