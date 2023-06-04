export const TOKEN_KEY = "QGtleQ==";
export const AUTH_USER = "QHVzZXJuYW1l";
export const AUTH_NAME = "QG5hbWU=";
export const AUTH_EMAIL = "QGVtYWls";
export const AUTH_ID = "QGlk";
export const AUTH_PIC = "QHBpYw==";
export const AUTH_ACCESS = "QGFjY2Vzcw==";
export const BACKEND_URL = "/api/v1";

export const isAuthenticated = () =>
  Boolean(localStorage.getItem(TOKEN_KEY) !== null);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUserData = () => {
  const name = localStorage.getItem(AUTH_NAME);
  const email = localStorage.getItem(AUTH_EMAIL);
  const id = localStorage.getItem(AUTH_ID);
  const pic = localStorage.getItem(AUTH_PIC);
  const access = localStorage.getItem(AUTH_ACCESS);
  return { name, email, id, pic, access };
};
export const getAccess = () =>
  localStorage.getItem(AUTH_ACCESS) === "admin" ? true : false;

export const login = (token, name, email, id, pic, access) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(AUTH_NAME, name);
  localStorage.setItem(AUTH_EMAIL, email);
  localStorage.setItem(AUTH_ID, id);
  localStorage.setItem(AUTH_PIC, pic);
  localStorage.setItem(AUTH_ACCESS, access);
  localStorage.setItem(
    AUTH_USER,
    JSON.stringify({ name: name, email: email, id: id, pic: pic, token: token })
  );
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(AUTH_USER);
  localStorage.removeItem(AUTH_NAME);
  localStorage.removeItem(AUTH_EMAIL);
  localStorage.removeItem(AUTH_ID);
  localStorage.removeItem(AUTH_PIC);
  localStorage.removeItem(AUTH_ACCESS);
  localStorage.clear();
};
