import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Bootstrap JS (for navbar, modals, etc.)
import "./index.css"; // ✅ Your custom styles (optional overrides)

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);