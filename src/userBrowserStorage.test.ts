import { it, expect } from "vitest";
import { useBrowserStorage } from "./useBrowserStorage";

it("can use browser `local-storage`", () => {
  const storage = useBrowserStorage({
    type: "local-storage",
    keyPrefix: "testPrefix",
  });

  if (!storage) {
    // TODO: need to fail the test if storage is undefined
    return;
  }

  const key = "testItem";
  const { setItem, getItem, removeItem } = storage;

  expect(getItem(key)).toBeUndefined();

  setItem(key, "testValue");
  expect(getItem(key)).toBe("testValue");

  removeItem(key);
  expect(getItem(key)).toBeUndefined();
});

it("can use browser `session-storage`", () => {
  const storage = useBrowserStorage({
    type: "session-storage",
    keyPrefix: "testPrefix",
  });

  if (!storage) {
    // TODO: need to fail the test if storage is undefined
    return;
  }

  const key = "testItem";
  const { setItem, getItem, removeItem } = storage;

  expect(getItem(key)).toBeUndefined();

  setItem(key, "testValue");
  expect(getItem(key)).toBe("testValue");

  removeItem(key);
  expect(getItem(key)).toBeUndefined();
});

it("can use browser `cookies`", () => {
  const storage = useBrowserStorage({
    type: "cookies",
    keyPrefix: "testPrefix",
  });

  if (!storage) {
    // TODO: need to fail the test if storage is undefined
    return;
  }

  const key = "testItem";
  const { setItem, getItem, removeItem } = storage;

  expect(getItem(key)).toBeUndefined();

  setItem(key, "testValue");
  expect(getItem(key)).toBe("testValue");

  removeItem(key);
  expect(getItem(key)).toBeUndefined();
});
