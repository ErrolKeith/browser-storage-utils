/**
 * Sets an item in session storage
 * @param key 
 * @param value 
 */
const setSessionStorageItem = (key: string, value: string) => {
  window.sessionStorage.setItem(key, value);
}

/**
 * Gets an item from session storage
 * @param key 
 * @returns 
 */
const getSessionStorageItem = (key: string): string | undefined => {
  return window.sessionStorage.getItem(key) ?? undefined;
}

/**
 * Removes an item from session storage
 * @param key 
 */
const removeSessionStorageItem = (key: string) => {
  window.sessionStorage.removeItem(key);
}

export { setSessionStorageItem, getSessionStorageItem, removeSessionStorageItem };