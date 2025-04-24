import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; // ← aussi, tu devrais utiliser "react-router-dom"
import App from "./App.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ScrollToTop />
      <App />
    </StrictMode>
  </BrowserRouter>
);
