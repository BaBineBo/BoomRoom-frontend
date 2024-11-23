import { Theme } from "@emotion/react";
// thanks to chatgpt <3 xoxoxo

// Utility to calculate relative luminance
const calculateLuminance = (color: string): number => {
  const rgb = color
    .replace(/^#/, "")
    .match(/.{2}/g)
    ?.map((hex) => parseInt(hex, 16) / 255);

  if (!rgb) throw new Error(`Invalid color format: ${color}`);

  return rgb
    .map((value) =>
      value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
    )
    .reduce(
      (acc, luminance, idx) => acc + luminance * [0.2126, 0.7152, 0.0722][idx],
      0
    );
};

// Utility to calculate contrast ratio
const calculateContrastRatio = (color1: string, color2: string): number => {
  const luminance1 = calculateLuminance(color1);
  const luminance2 = calculateLuminance(color2);
  const [lighter, darker] =
    luminance1 > luminance2
      ? [luminance1, luminance2]
      : [luminance2, luminance1];
  return (lighter + 0.05) / (darker + 0.05);
};

// Main utility to get optimal contrast color
export const getContrastTextColor = (
  backgroundColor: string,
  theme: Theme
): string => {
  const contrastWithText = calculateContrastRatio(
    backgroundColor,
    theme.palette.text
  );
  const contrastWithBackground = calculateContrastRatio(
    backgroundColor,
    theme.palette.background
  );

  return contrastWithText >= contrastWithBackground
    ? theme.palette.text
    : theme.palette.background;
};
