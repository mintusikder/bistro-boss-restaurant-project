import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import {HelmetProvider } from 'react-helmet-async';
import AuthProvider from "./provider/AuthProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
<HelmetProvider>
<AuthProvider>
<div className="max-w-7xl mx-auto">
 <RouterProvider router={router} />
 </div>
</AuthProvider>
</HelmetProvider>
  </StrictMode>
);
