import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// service-worker.js 登録
if ("serviceWorker" in navigator) {
  // supported service worker
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js", {
        scope: "/", // service worker scope
      })
      .then(() => {
        console.info("ServiceWorker registration successful");
      })
      .catch((error) => {
        console.error("ServiceWorker registration failed:", error);
      });
  });
}
