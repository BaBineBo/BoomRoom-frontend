import { useEffect, useState } from "react";
import { LocalStorageKey } from "../constants/theme/localStorageKeys";

interface LocalStorageStateProps<T> {
  localStorageKey: LocalStorageKey;
  initialValue: T;
}

/**
 *
 * @param localStorageKey a key for accessing localstorage
 * @param initialValue required to interperate the type of value to be stored/fetched
 * @returns
 */
export const useLocalStorageState = <T>({
  localStorageKey,
  initialValue,
}: LocalStorageStateProps<T>) => {
  // Get initial value from localStorage or use provided initial value
  const [state, setState] = useState<T>(() => {
    // Check if there's a value for the key in localStorage
    const storedValue = localStorage.getItem(localStorageKey);
    if (storedValue) {
      try {
        return JSON.parse(storedValue); // Parse the value if it exists
      } catch (error) {
        console.error("Error parsing stored value:", error);
      }
    }
    return initialValue; // Use initialValue if no value is found in localStorage
  });

  // Effect to update localStorage when state changes
  useEffect(() => {
    if (state !== undefined) {
      try {
        localStorage.setItem(localStorageKey, JSON.stringify(state)); // Save state to localStorage
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }
  }, [state, localStorageKey]); // Re-run effect when `state` or `key` changes

  return [state, setState] as const; // Return state and setState, just like useState
};
