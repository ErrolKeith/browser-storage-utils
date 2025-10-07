/**
 * Sets an item in local storage
 * @param key 
 * @param value 
 */
export const setLocalStorageItem = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

/**
 * Gets an item from local storage
 * @param key
 * @returns 
 */
export const getLocalStorageItem = (key: string): string | null => {
  return window.localStorage.getItem(key);
};

/**
 * Removes an item from local storage
 * @param key 
 */
export const removeLocalStorageItem = (key: string) => {
  window.localStorage.removeItem(key);
};
