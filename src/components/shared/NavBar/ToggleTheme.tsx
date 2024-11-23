import { useMemo } from "react";
import { useTheme } from "../../../hooks/useTheme";
import SunSVG from "../../../assets/sun.svg?react";
import MoonSVG from "../../../assets/moon.svg?react";
import { IconButton } from "../Button/IconButton";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  const mode = useMemo(() => theme.mode, [theme]);
  return (
    <IconButton onClick={toggleTheme}>
      {mode === "light" ? (
        <SunSVG width={theme.iconSizes.s} fill={theme.palette.text} />
      ) : (
        <MoonSVG width={theme.iconSizes.s} fill={theme.palette.text} />
      )}
    </IconButton>
  );
};
