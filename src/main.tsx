import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./index.css";
import { enableMocking } from "./mocks";

const root = document.getElementById("root");
if (!root) {
  throw new Error("No root element found");
}

enableMocking().then(() => {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
