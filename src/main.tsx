import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fonts/fonts.css";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
    <Analytics />
  </StrictMode>
);
