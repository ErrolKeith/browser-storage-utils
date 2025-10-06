import { useBrowserStorage } from "./useBrowserStorage";
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
import type { BrowserStorage } from "./types";

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
export type { BrowserStorage };
