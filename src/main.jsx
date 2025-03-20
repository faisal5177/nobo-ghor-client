import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AuthProvider from "./context/AuthProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
      </AuthProvider>
    </StrictMode>
);
