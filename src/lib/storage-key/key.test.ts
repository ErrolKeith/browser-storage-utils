import { expect, it } from "vitest";
import { makeOptionallyPrefixedKey } from "./key";

const key = "test-key";
const prefix = "test-prefix";

it("returns the key with the prefix when a prefix is provided", () => {
  const result = makeOptionallyPrefixedKey(key, prefix);
  expect(result).toBe(`${prefix}_${key}`);
});

it("returns the key as is when no prefix is provided", () => {
  const result = makeOptionallyPrefixedKey(key);
  expect(result).toBe(key);
});

it("handles empty string as prefix", () => {
  const prefix = "";
  const result = makeOptionallyPrefixedKey(key, prefix);
  expect(result).toBe(key);
});

it("handles long prefixes", () => {
  const prefix =
    "unexcetionally-long-prefix-that-exceeds-normal-lengths-to-test-the-functionality-what-are-we-doing-this-is-crazy";
  const result = makeOptionallyPrefixedKey(key, prefix);
  expect(result).toBe(`${prefix}_${key}`);
});

it("handles special characters in prefix", () => {
  const prefix = "my@Prefix#123!";
  const result = makeOptionallyPrefixedKey(key, prefix);
  expect(result).toBe(`${prefix}_${key}`);
});

it("handles unicode characters in prefix", () => {
  const key = "myKey";
  const prefix = "前缀";
  const result = makeOptionallyPrefixedKey(key, prefix);
  expect(result).toMatch(`${prefix}_${key}`);
});
