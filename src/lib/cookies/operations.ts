import Cookie, { type CookieAttributes } from "js-cookie"

const getCookie = (key: string) => {
  return Cookie.get(key);
};

const setCookie = (key: string, value: string, cookieOptions?: CookieAttributes) => {
  Cookie.set(key, value, cookieOptions);
};

const removeCookie = (key: string) => {
  Cookie.remove(key)
};

export { setCookie, getCookie, removeCookie };
