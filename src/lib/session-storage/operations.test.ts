import { it, expect } from "vitest";
import {
  getSessionStorageItem,
  removeSessionStorageItem,
  setSessionStorageItem,
} from "./operations";

const sessionStorageMock = (function () {
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

Object.defineProperty(window, "sessionStorage", {
  value: sessionStorageMock,
  writable: true,
});

it("can set an item in `sessionStorage`", () => {
  setSessionStorageItem("testKey", "testValue");
  expect(window.sessionStorage.getItem("testKey")).toBe("testValue");
});

it("can get an item from `sessionStorage`", () => {
  window.sessionStorage.setItem("testKey", "testValue");
  expect(getSessionStorageItem("testKey")).toBe("testValue");
});

it("returns undefined for a non-existent key in `sessionStorage`", () => {
  expect(getSessionStorageItem("nonExistentKey")).toBeUndefined();
});

it("can remove an item from `sessionStorage`", () => {
  window.sessionStorage.setItem("testKey", "testValue");
  removeSessionStorageItem("testKey");
  expect(window.sessionStorage.getItem("testKey")).toBeNull();
});

it("does nothing when removing a non-existent key from `sessionStorage`", () => {
  expect(() => removeSessionStorageItem("nonExistentKey")).not.toThrow();
});
