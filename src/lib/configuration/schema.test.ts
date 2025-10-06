import { expect, it } from "vitest";
import {
  browserStorageConfigSchema,
  localStorageConfigSchema,
  sessionStorageConfigSchema,
  cookieConfigSchema,
} from "./schema";

it("can validate local storage config", () => {
  const validLocalStorageConfig = {
    type: "local-storage",
    options: { keyPrefix: "myApp" },
  };

  expect(() =>
    browserStorageConfigSchema.parse(validLocalStorageConfig)
  ).not.toThrow();

  expect(browserStorageConfigSchema.parse(validLocalStorageConfig)).toEqual(
    validLocalStorageConfig
  );

  const invalidLocalStorageConfig = { type: "local-storages" };

  expect(() =>
    localStorageConfigSchema.parse(invalidLocalStorageConfig)
  ).toThrow();
});

it("can validate session storage config", () => {
  const validSessionStorageConfig = {
    type: "session-storage",
    options: { keyPrefix: "myApp" },
  };

  expect(() =>
    browserStorageConfigSchema.parse(validSessionStorageConfig)
  ).not.toThrow();

  const invalidSessionStorageConfig = { type: "session-storages" };

  expect(() =>
    sessionStorageConfigSchema.parse(invalidSessionStorageConfig)
  ).toThrow();
});

it("can validate cookies config", () => {
  const validCookiesConfig = {
    type: "cookies",
    options: { expires: 7 },
  };

  expect(() =>
    browserStorageConfigSchema.parse(validCookiesConfig)
  ).not.toThrow();
  expect(() => cookieConfigSchema.parse(validCookiesConfig)).not.toThrow();

  const invalidCookiesConfig = { type: "cookiezz", expiryDays: "seven" };

  expect(() => cookieConfigSchema.parse(invalidCookiesConfig)).toThrow();
});
