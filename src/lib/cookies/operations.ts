import Cookie, { type CookieAttributes } from "js-cookie"

export const getCookie = (key: string) => {
  return Cookie.get(key);
};

export const setCookie = (
  key: string,
  value: string,
  cookieOptions?: CookieAttributes
) => {
  Cookie.set(key, value, cookieOptions);
};

export const removeCookie = (key: string) => {
  Cookie.remove(key);
};
