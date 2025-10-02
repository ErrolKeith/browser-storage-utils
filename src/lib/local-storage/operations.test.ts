import { it, expect } from "vitest";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "./operations";

const localStorageMock = (function () {
  let store: Record<string, string> = {};
  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
  writable: true,
});

it("can set an item in `localStorage`", () => {
  setLocalStorageItem("testKey", "testValue");
  expect(window.localStorage.getItem("testKey")).toBe("testValue");
});

it("can get an item from `localStorage`", () => {
  window.localStorage.setItem("testKey", "testValue");
  expect(getLocalStorageItem("testKey")).toBe("testValue");
});

it("returns null for a non-existent key in `localStorage`", () => {
  expect(getLocalStorageItem("nonExistentKey")).toBeNull();
});

it("can remove an item from `localStorage`", () => {
  window.localStorage.setItem("testKey", "testValue");
  removeLocalStorageItem("testKey");
  expect(window.localStorage.getItem("testKey")).toBeNull();
});

it("does nothing when removing a non-existent key from `localStorage`", () => {
  expect(() => removeLocalStorageItem("nonExistentKey")).not.toThrow();
});
