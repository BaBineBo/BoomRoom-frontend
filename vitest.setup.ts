// vitest.setup.ts
import "@testing-library/jest-dom";

import { vi } from "vitest";

// Optional: Add any global setup logic for vitest tests here
globalThis.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
};
