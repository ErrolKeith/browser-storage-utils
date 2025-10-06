import { setCookie, getCookie, removeCookie } from "./operations";
import { it, expect } from "vitest";

it("can set, get, and remove a cookie", () => {
  const key = "testCookie";
  const value = "testValue";

  // Set the cookie
  setCookie(key, value, 1); // Expires in 1 day

  // Get the cookie
  const retrievedValue = getCookie(key);
  expect(retrievedValue).toBe(value);

  // Remove the cookie
  removeCookie(key);
  const afterRemovalValue = getCookie(key);
  expect(afterRemovalValue).toBeUndefined();
});