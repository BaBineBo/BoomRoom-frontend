import { useLayoutEffect, useState } from "react";
import { LOCAL_STORAGE_KEYS } from "../../constants/theme/localStorageKeys";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { darkTheme, lightTheme } from "../../models/theme";
import { ThemeContext, WindowMode } from "./ThemeContext";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

// TODO listen to system preference (dark or light)
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useLocalStorageState({
    initialValue: lightTheme,
    localStorageKey: LOCAL_STORAGE_KEYS.theme_mode,
  });

  // Change mode on window size change.
  // This will be used e.g. for mobile components (like navbar hamburger)
  const [windowMode, setWindowMode] = useState<WindowMode>("web");
  useLayoutEffect(() => {
    const updateWindowMode = () => {
      const width = window.innerWidth;
      if (width < 800) {
        setWindowMode("phone");
        console.log("phone size");
      } else if (width < 1300) {
        setWindowMode("tablet");
        console.log("tablet size");
      } else {
        setWindowMode("web");
        console.log("web size");
      }
    };

    window.addEventListener("resize", updateWindowMode);

    return () => window.removeEventListener("resize", updateWindowMode);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.mode === "light" ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, windowMode, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
