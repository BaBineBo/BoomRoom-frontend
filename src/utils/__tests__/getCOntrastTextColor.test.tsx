import { getContrastTextColor } from "../getContrastTextColor";
import { darkTheme, lightTheme } from "../../models/theme";

describe("getContrastTextColor", () => {
  test("should return text color when contrast with text is higher", () => {
    const result = getContrastTextColor(
      darkTheme.palette.background,
      darkTheme
    );

    // Since the contrast with text should be higher, it should return the text color (#000000)
    expect(result).toBe(darkTheme.palette.text);
  });

  test("should return background color when contrast with background is higher", () => {
    const result = getContrastTextColor(lightTheme.palette.text, lightTheme);

    // Since the contrast with background should be higher, it should return the background color (#FFFFFF)
    expect(result).toBe(lightTheme.palette.background);
  });
});
