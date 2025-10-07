import { makeOptionallyPrefixedKey } from "./lib/storage-key/key";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "./lib/local-storage/operations";
import {
  getSessionStorageItem,
  removeSessionStorageItem,
  setSessionStorageItem,
} from "./lib/session-storage/operations";
import { getCookie, removeCookie, setCookie } from "./lib/cookies/operations";
import { useBrowserStorage } from "./lib/composable/useBrowserStorage";
import type { BrowserStorage } from "./lib/composable/useBrowserStorage";
import type {
  BrowserStorageConfiguration,
  CookieStorageOptions,
  CookiesConfiguration,
  LocalStorageConfiguration,
  LocalStorageOptions,
  SessionStorageConfiguration,
  SessionStorageOptions,
} from "./lib/composable/configuration/schema";

export {
  getCookie,
  getLocalStorageItem,
  getSessionStorageItem,
  makeOptionallyPrefixedKey,
  removeCookie,
  removeLocalStorageItem,
  removeSessionStorageItem,
  setCookie,
  setLocalStorageItem,
  setSessionStorageItem,
  useBrowserStorage,
};
export type {
  BrowserStorage,
  BrowserStorageConfiguration,
  CookieStorageOptions,
  CookiesConfiguration,
  LocalStorageConfiguration,
  LocalStorageOptions,
  SessionStorageConfiguration,
  SessionStorageOptions,
};
