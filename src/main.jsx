import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import "./dist/css/main.css";
import router from "./router";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
