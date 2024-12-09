export const getTransparentColor = (hex: string, alpha: number): string => {
  // Ensure the alpha is between 0 and 1
  const clampedAlpha = Math.min(Math.max(alpha, 0), 1);
  const noHashtagHex = hex.substring(hex.length - 6, hex.length);
  // Remove the '#' from the hex color if it exists

  // Check for a valid 6-character noHashtagHex
  if (noHashtagHex.length !== 6) {
    console.log(noHashtagHex, "ERROR");
    throw new Error("Invalid noHashtagHex color format");
  }

  // Convert noHashtagHex to RGB
  const r = parseInt(noHashtagHex.slice(0, 2), 16);
  const g = parseInt(noHashtagHex.slice(2, 4), 16);
  const b = parseInt(noHashtagHex.slice(4, 6), 16);

  // Return RGBA value
  return `rgba(${r}, ${g}, ${b}, ${clampedAlpha})`;
};
