import { createContext } from "react";

import { ThemeProvider as EmotionThemeProvider, Theme } from "@emotion/react";
import { darkTheme, lightTheme } from "../models/theme";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { LOCAL_STORAGE_KEYS } from "../constants/theme/localStorageKeys";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// TODO listen to system preference (dark or light)
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useLocalStorageState({
    initialValue: lightTheme,
    localStorageKey: LOCAL_STORAGE_KEYS.theme_mode,
  });

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.mode === "light" ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
