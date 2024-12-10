import { createContext } from "react";

import { Theme } from "@emotion/react";

export type WindowMode = "phone" | "tablet" | "web";
interface ThemeContextType {
  theme: Theme;
  windowMode: WindowMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
