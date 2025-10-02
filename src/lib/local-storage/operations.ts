/**
 * Sets an item in local storage
 * @param key 
 * @param value 
 */
const setLocalStorageItem = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

/**
 * Gets an item from local storage
 * @param key
 * @returns 
 */
const getLocalStorageItem = (key: string): string | null => {
  return window.localStorage.getItem(key);
};

/**
 * Removes an item from local storage
 * @param key 
 */
const removeLocalStorageItem = (key: string) => {
  window.localStorage.removeItem(key);
};

export { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem };
