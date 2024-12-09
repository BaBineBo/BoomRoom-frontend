import { LOCAL_STORAGE_KEYS } from "../../constants/theme/localStorageKeys";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { darkTheme, lightTheme } from "../../models/theme";
import { ThemeContext } from "./ThemeContext";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
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
