import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Admin from "./Admin";
import "./styles.css";

const isAdminRoute = window.location.pathname.replace(/\/$/, "") === "/admin";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isAdminRoute ? <Admin /> : <App />}
  </React.StrictMode>
);
