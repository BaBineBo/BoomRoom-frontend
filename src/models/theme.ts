// theme.ts
import { Theme } from "@emotion/react";
import { spacing } from "../constants/theme/spacing";
import { borderRadius } from "../constants/theme/borderRadius";
import { iconSizes } from "../constants/theme/iconSizes";
import { fontSizes } from "../constants/theme/fontSizes";

export const lightTheme: Theme = {
  mode: "light",
  shadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  palette: {
    text: " #612800",
    background: "#ffe0d1",
    primary: "#9fc46e",
    secondary: "#c4de8e",
    accent: "#da9d72",
    red: "#e74c3c",
  },
  gradients: {
    linearPrimarySecondary: "linear-gradient(#9fc46e, #c4de8e)",
    linearPrimaryAccent: "linear-gradient(#9fc46e, #da9d72)",
    linearSecondaryAccent: "linear-gradient(#c4de8e, #da9d72)",
    radialPrimarySecondary: "radial-gradient(#9fc46e, #c4de8e)",
    radialPrimaryAccent: "radial-gradient(#9fc46e, #da9d72)",
    radialSecondaryAccent: "radial-gradient(#c4de8e, #da9d72)",
  },
  spacing,
  borderRadius,
  iconSizes,
  typography: {
    fontSize: fontSizes,
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
};

export const darkTheme: Theme = {
  ...lightTheme,
  mode: "dark",
  palette: {
    text: "#ffc69e",
    background: "#2e0f00",
    primary: "#6c913b",
    secondary: "#587321",
    accent: "#8d5125",
    red: "#e74c3c",
  },
  gradients: {
    linearPrimarySecondary: "linear-gradient(#6c913b, #587321)",
    linearPrimaryAccent: "linear-gradient(#6c913b, #8d5125)",
    linearSecondaryAccent: "linear-gradient(#587321, #8d5125)",
    radialPrimarySecondary: "radial-gradient(#6c913b, #587321)",
    radialPrimaryAccent: "radial-gradient(#6c913b, #8d5125)",
    radialSecondaryAccent: "radial-gradient(#587321, #8d5125)",
  },
};
