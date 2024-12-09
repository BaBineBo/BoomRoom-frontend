/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), svgr()],
  test: {
    environment: "jsdom", // Specify jsdom for testing DOM-based components
    globals: true, // Enable global variables such as `vi`, `expect`, and `test`
    setupFiles: "./vitest.setup.ts", // Optional setup file for additional configuration
    coverage: {
      provider: "v8", // You can use `c8` for code coverage
      reporter: ["text", "json", "html"],
      all: true,
    },
  },
  resolve: {
    alias: {
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
