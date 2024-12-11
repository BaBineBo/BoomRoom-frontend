import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import the generated route tree
import { ThemeProvider } from "./contexts/theme/ThemeProvider";
import GlobalScrollbarStyles from "./utils/GlobalScrollbarStyles";
import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalScrollbarStyles />
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
