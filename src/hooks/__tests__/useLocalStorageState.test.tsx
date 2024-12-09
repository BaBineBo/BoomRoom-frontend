import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import { LocalStorageKey } from "../../constants/theme/localStorageKeys";
import { useLocalStorageState } from "../useLocalStorageState";

beforeEach(() => {
  // Mock localStorage with all required methods using 'vi'
  global.localStorage = {
    getItem: vi.fn().mockReturnValue('{"theme": "dark"}'), // Mock getItem
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
    length: 0, // Mocking length property
    key: vi.fn(),
  } as unknown as Storage; // Explicitly type localStorage as Storage
});

test("should return initial value when no localStorage value is set", () => {
  const mockKey: LocalStorageKey = "theme_mode"; // Adjust based on your keys
  const initialValue = "light"; // Example initial value

  // Mock localStorage to return null (no value)
  vi.mocked(localStorage.getItem).mockReturnValue(null);

  const { result } = renderHook(() =>
    useLocalStorageState({ localStorageKey: mockKey, initialValue })
  );

  expect(result.current[0]).toBe(initialValue); // Initial value should be returned
});
