export const TOKEN_KEY = "@key";
export const AUTH_USER = "@username";
export const AUTH_ACCESS = "@access";
export const BACKEND_URL = "https://localhost:3001/api/v1"

export const isAuthenticated = () =>
  Boolean(localStorage.getItem(TOKEN_KEY) !== null);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUserData = () => JSON.parse(localStorage.getItem(AUTH_USER));
export const getAccess = () =>
  localStorage.getItem(AUTH_ACCESS) === "admin" ? true : false;

export const login = (token, name, email, id, pic, access) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(AUTH_ACCESS, access);
  localStorage.setItem(AUTH_USER,JSON.stringify({ name: name, email: email, id: id,pic: pic, token: token }));
};

export const logout = () => {
  localStorage.clear()
};
