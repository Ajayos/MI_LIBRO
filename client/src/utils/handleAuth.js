export const TOKEN_KEY = "QGtleQ==";
export const AUTH_USER = "QHVzZXJuYW1l";
export const AUTH_NAME = "QG5hbWU=";
export const AUTH_EMAIL = "QGVtYWls";
export const AUTH_ID = "QGlk";
export const AUTH_PIC = "QHBpYw==";
export const AUTH_ACCESS = "QGFjY2Vzcw==";
export const BACKEND_URL = "/api/v1";

export const isAuthenticated = () =>
  Boolean(atob(localStorage.getItem(TOKEN_KEY)) !== null);
export const getToken = () => atob(localStorage.getItem(TOKEN_KEY));
export const getUserData = () => {
  const name = atob(localStorage.getItem(AUTH_NAME));
  const email = atob(localStorage.getItem(AUTH_EMAIL));
  const id = atob(localStorage.getItem(AUTH_ID));
  const pic = atob(localStorage.getItem(AUTH_PIC));
  const access = atob(localStorage.getItem(AUTH_ACCESS));
  return { name, email, id, pic, access };
};
export const getAccess = () =>
  atob(localStorage.getItem(AUTH_ACCESS)) === "admin" ? true : false;

export const login = (token, name, email, id, pic, access) => {
  localStorage.setItem(TOKEN_KEY, btoa(token));
  localStorage.setItem(AUTH_NAME, btoa(name));
  localStorage.setItem(AUTH_EMAIL, btoa(email));
  localStorage.setItem(AUTH_ID, btoa(id));
  localStorage.setItem(AUTH_PIC, btoa(pic));
  localStorage.setItem(AUTH_ACCESS, btoa(access));
  localStorage.setItem(
    AUTH_USER,
    btoa(JSON.stringify({ name: name, email: email, id: id, pic: pic, token: token }))
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
