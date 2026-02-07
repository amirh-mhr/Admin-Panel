import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/contextProvider";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1JGaF1cXmhKYVppR2NbeU5xdF9CZFZSQGYuP1ZhSXxVdkdjXn5edHBWTmVdWUR9XEA="
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
    
  </StrictMode>
  
);
