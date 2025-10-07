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
import { useBrowserStorage, type BrowserStorage } from "./lib/composable/useBrowserStorage";

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
