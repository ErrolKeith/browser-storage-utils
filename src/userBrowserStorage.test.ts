import { it, expect } from "vitest";
import { useBrowserStorage } from "./useBrowserStorage";

const key = "testItem";

it("can use browser `local-storage`", () => {
  const storage = useBrowserStorage({
    type: "local-storage",
    options: {
      keyPrefix: "testPrefix",
    },
  });

  if (!storage) {
    // TODO: need to fail the test if storage is undefined
    return;
  }

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
    options: {
      keyPrefix: "testPrefix",
    },
  });

  if (!storage) {
    // TODO: need to fail the test if storage is undefined
    return;
  }

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
    options: {
      keyPrefix: "testPrefix",
      expires: 1,
    },
  });

  if (!storage) {
    // TODO: need to fail the test if storage is undefined
    return;
  }

  const { setItem, getItem, removeItem } = storage;

  expect(getItem(key)).toBeUndefined();

  setItem(key, "testValue");
  expect(getItem(key)).toBe("testValue");

  removeItem(key);
  expect(getItem(key)).toBeUndefined();
});
