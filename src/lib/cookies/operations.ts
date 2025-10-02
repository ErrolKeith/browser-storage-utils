const getCookieString = () => {
  return document.cookie;
};

const getCookieObject = () => {
  const cookies = getCookieString().split(";");
  const cookieObject: Record<string, string> = {};

  cookies.forEach((cookie) => {
    const parts = cookie.split("=");
    const name = decodeURIComponent(parts[0] ? parts[0].trim() : "");
    const value = decodeURIComponent(parts.slice(1).join("=")); // Handle cases where value might contain '='
    cookieObject[name] = value;
  });

  return cookieObject;
};

const getCookie = (key: string) => {
  return getCookieObject()[key];
};

const setCookie = (key: string, value: string, expiryDays?: number) => {
  let cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/`;

  if (expiryDays !== undefined) {
    const date = new Date();
    date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
    cookieString += `; expires=${date.toUTCString()}`;
  }

  document.cookie = cookieString;
};

const removeCookie = () => {};

export { setCookie, getCookie, removeCookie };
