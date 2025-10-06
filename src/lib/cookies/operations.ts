import * as Cookie from "js-cookie"

const getCookie = (key: string) => {
  return Cookie.get(key);
};

const setCookie = (key: string, value: string, expiryDays?: number) => {
  Cookie.set(key, value, { expires: expiryDays });
};

const removeCookie = (key: string) => {
  Cookie.remove(key)
};

export { setCookie, getCookie, removeCookie };
