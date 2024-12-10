// theme.d.ts (or in theme.ts if you prefer inline)
import "@emotion/react";
import { spacing } from "./constants/theme/spacing";
import { borderRadius } from "./constants/theme/borderRadius";
import { iconSizes } from "./constants/theme/iconSizes";

type ShadeScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

interface Shades {
  text: ShadeScale;
  background: ShadeScale;
  primary: ShadeScale;
  secondary: ShadeScale;
  accent: ShadeScale;
}

type ThemeMode = "light" | "dark";

declare module "@emotion/react" {
  export interface Theme {
    mode: ThemeMode;
    palette: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      accent: string;
    };
    gradients: {
      linearPrimarySecondary: string;
      linearPrimaryAccent: string;
      linearSecondaryAccent: string;
      radialPrimarySecondary: string;
      radialPrimaryAccent: string;
      radialSecondaryAccent: string;
    };
    shades: Shades;
    iconSizes: typeof iconSizes;
    spacing: typeof spacing;
    borderRadius: typeof borderRadius;
    borderRadius: {
      xs: "4px"; // Extra small border radius
      s: "8px"; // Small border radius
      m: "12px"; // Medium border radius
      l: "16px"; // Large border radius
      xl: "24px"; // Extra large border radius
    };
    typography: {
      fontSize: {
        small: string;
        medium: string;
        large: string;
      };
      fontWeight: {
        light: number;
        regular: number;
        bold: number;
      };
      fontFamily: string;
    };
    spacing: (factor: number) => string;
  }
}
