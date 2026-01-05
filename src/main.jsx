import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/contextProvider";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1JGaF5cXGpCfExyWmFZfVhgc19HZ1ZTQGYuP1ZhSXxVdkRjXH9ZcXNXTmdcUkN9XEA="
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
