import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

async function enableMockServiceWorker() {
  const { worker } = await import("./mocks/browser.ts");
  await worker.start();
}
enableMockServiceWorker();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
