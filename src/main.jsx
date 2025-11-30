import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/contextProvider";
registerLicense(
  "Ngo9BigBOggjGyl/Vkd+XU9FcVRDX3xLeUx0RWFcb19yflZFallYVBYiSV9jS3tSd0dqWH9fc3RdT2BfWE91Xg=="
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
