import Cookies from 'js-cookie';

// Set a cookie
export const setCookie = (name, value, days) => {
  Cookies.set(name, value, { expires: days || 7, secure: true, sameSite: 'strict' });
};

// Get a cookie
export const getCookie = (name) => {
  return Cookies.get(name);
};

// Remove a cookie
export const removeCookie = (name) => {
  Cookies.remove(name);
};
