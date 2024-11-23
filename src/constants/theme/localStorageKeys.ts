export const LOCAL_STORAGE_KEYS = {
  theme_mode: "theme_mode",
} as const;
export type LocalStorageKey = keyof typeof LOCAL_STORAGE_KEYS;
