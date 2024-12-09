import { act, render, screen } from "@testing-library/react";

import { ThemeProvider } from "../../contexts/theme/ThemeProvider";
import { useTheme } from "../useTheme";

// Helper component to use the hook
const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span>{theme.mode}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Wrapper component to provide the theme context
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe("useTheme Hook", () => {
  test("should provide the current theme and toggle function", async () => {
    render(
      <Wrapper>
        <TestComponent />
      </Wrapper>
    );

    // Check if the current theme is correct (initial theme is light)
    expect(screen.getByText("light")).toBeInTheDocument();

    // Click to toggle the theme
    await act(async () => screen.getByText("Toggle Theme").click());

    // After toggling, check if the theme is updated to dark
    expect(screen.getByText("dark")).toBeInTheDocument();
  });
});
