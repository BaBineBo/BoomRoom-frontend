import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import the generated route tree
import { ThemeProvider } from "./contexts/theme/ThemeProvider";
import GlobalScrollbarStyles from "./utils/GlobalScrollbarStyles";
import { Router } from "./router";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider>
        <GlobalScrollbarStyles />
        <Router />
      </ThemeProvider>
    </StrictMode>
  );
}
