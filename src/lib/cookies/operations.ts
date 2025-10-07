import Cookie, { type CookieAttributes } from "js-cookie"

/**
 * get cookie by key
 * 
 * @param key 
 * @returns 
 */
export const getCookie = (key: string) => {
  return Cookie.get(key);
};

/**
 * set cookie
 * @param key 
 * @param value 
 * @param cookieOptions 
 */
export const setCookie = (
  key: string,
  value: string,
  cookieOptions?: CookieAttributes
) => {
  Cookie.set(key, value, cookieOptions);
};

/**
 * remove cookie by key
 * @param key 
 */
export const removeCookie = (key: string) => {
  Cookie.remove(key);
};
