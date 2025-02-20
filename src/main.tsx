import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/index.tsx";

async function enableMockServiceWorker() {
  const { worker } = await import("./mocks/browser.ts");
  await worker.start();
}
enableMockServiceWorker().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
