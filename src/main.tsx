import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/index.tsx";

import "./index.css";
import { enableMock } from "./mocks/index.ts";

enableMock().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
