import { makeOptionallyPrefixedKey } from "./lib/storage-key/key";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "./lib/local-storage/operations";
import {
  getSessionStorageItem,
  setSessionStorageItem,
  removeSessionStorageItem,
} from "./lib/session-storage/operations";
import { setCookie, getCookie, removeCookie } from "./lib/cookies/operations";
import { browserStorageConfigSchema, type BrowserStorageConfiguration } from "./lib/configuration/schema";

/**
 * A Composable function to interact with browser storage mechanisms: localStorage, sessionStorage, and cookies.
 * 
 * @param storageConfiguration {@link BrowserStorageConfiguration}
 * @returns
 * @example
 * const { getItem, setItem, removeItem, setItemIfNotSet } = useBrowserStorage({ type: "local-storage", keyPrefix: "myApp" });
 *
 * const user = "user123";
 * setItem("username", user);
 * const username = getItem("username");
 * removeItem("username");
 * setItemIfNotSet("username", "jane_doe"); // Only sets if "username" is not already set
 */
export function useBrowserStorage(
  storageConfiguration: BrowserStorageConfiguration
) {
  try {
    // TODO: This should be safeParse with better error reporting, and would remove the try/catch
    const validConfig = browserStorageConfigSchema.parse(storageConfiguration);
    const { type, keyPrefix } = validConfig;

    /**
     * Used to set a storage value.
     * @param key
     * @param value
     * @example
     * const { setItem } = useBrowserStorage({ type: "local-storage", keyPrefix: "myApp" });
     *
     * setItem("username", "john_doe");
     */
    const setItem = (key: string, value: string) => {
      const storageKey = makeOptionallyPrefixedKey(key, keyPrefix);
      switch (type) {
        case "local-storage":
          setLocalStorageItem(storageKey, value);
          break;
        case "session-storage":
          setSessionStorageItem(storageKey, value);
          break;
        case "cookies":
          const { expiryDays } = validConfig;

          setCookie(storageKey, value, expiryDays);

          document.cookie = `${storageKey}=${value}; path=/`;
          break;
      }
    };

    /**
     * Used to set a value only if it does not already exist.
     * @param key
     * @param value
     * @example
     * const { setItemIfNotSet } = useBrowserStorage({ type: "local-storage", keyPrefix: "myApp" });
     *
     * setItemIfNotSet("username", "john_doe"); // Only sets if "username" is not already set
     */
    const setItemIfNotSet = (key: string, value: string) => {
      const existingValue = getItem(key);

      if (existingValue === undefined) {
        setItem(key, value);
      }
    };

    /**
     *
     * @param key
     * @returns
     * @example
     * const { getItem } = useBrowserStorage({ type: "local-storage", keyPrefix: "myApp" });
     *
     * const username = getItem("username");
     */
    const getItem = (key: string): string | undefined => {
      const storageKey = makeOptionallyPrefixedKey(key, keyPrefix);
      switch (type) {
        case "local-storage":
          return getLocalStorageItem(storageKey) ?? undefined;
        case "session-storage":
          return getSessionStorageItem(storageKey);
        case "cookies":
          return getCookie(storageKey);
        default:
          return undefined;
      }
    };

    /**
     *
     * @param key
     * @example
     * const { removeItem } = useBrowserStorage({ type: "local-storage", keyPrefix: "myApp" });
     *
     * removeItem("username"); // Removes the item associated with "myApp_username" from localStorage
     */
    const removeItem = (key: string) => {
      const storageKey = makeOptionallyPrefixedKey(key, keyPrefix);
      switch (type) {
        case "local-storage":
          removeLocalStorageItem(storageKey);
          break;
        case "session-storage":
          removeSessionStorageItem(storageKey);
          break;
        case "cookies":
          removeCookie();
          break;
      }
    };

    return { getItem, removeItem, setItem, setItemIfNotSet };
  } catch (e) {
    console.error("browser-storage-utils-error", e);
  }
}
