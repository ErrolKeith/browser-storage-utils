import { expect, it } from "vitest";
import {
  browserStorageConfigSchema,
  localStorageConfigSchema,
  sessionStorageConfigSchema,
  cookieConfigSchema,
} from "./schema";

it("can validate local storage config", () => {
  const validLocalStorageConfig = { type: "local-storage", keyPrefix: "myApp" };

  expect(() =>
    browserStorageConfigSchema.parse(validLocalStorageConfig)
  ).not.toThrow();
  expect(() =>
    browserStorageConfigSchema.parse(validLocalStorageConfig)
  ).not.toThrow();
  expect(() =>
    localStorageConfigSchema.parse(validLocalStorageConfig)
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
    keyPrefix: "myApp",
  };

  expect(() =>
    browserStorageConfigSchema.parse(validSessionStorageConfig)
  ).not.toThrow();
  expect(() =>
    sessionStorageConfigSchema.parse(validSessionStorageConfig)
  ).not.toThrow();
  expect(browserStorageConfigSchema.parse(validSessionStorageConfig)).toEqual(
    validSessionStorageConfig
  );

  const invalidSessionStorageConfig = { type: "session-storages" };

  expect(() =>
    sessionStorageConfigSchema.parse(invalidSessionStorageConfig)
  ).toThrow();
});

it("can validate cookies config", () => {
  const validCookiesConfig = {
    type: "cookies",
    keyPrefix: "myApp",
    cookieOptions: { expires: 7 },
  };

  expect(() =>
    browserStorageConfigSchema.parse(validCookiesConfig)
  ).not.toThrow();
  expect(() => cookieConfigSchema.parse(validCookiesConfig)).not.toThrow();
  expect(browserStorageConfigSchema.parse(validCookiesConfig)).toEqual(
    validCookiesConfig
  );

  const invalidCookiesConfig = { type: "cookiess", expiryDays: "seven" };
  
  expect(() => cookieConfigSchema.parse(invalidCookiesConfig)).toThrow();
});
