export const TOKEN_KEY = "@key";
export const AUTH_USER = "@username";
export const AUTH_ACCESS = "@access";
export const BACKEND_URL_ = "http://192.168.43.89:3001"
export const BACKEND_URL = "/api/v1"
export const isAuthenticated = () =>
  Boolean(localStorage.getItem(TOKEN_KEY) !== null);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUserData = () => {
  const name = localStorage.getItem("@name");
  const email = localStorage.getItem("@email");
  const id = localStorage.getItem("@id");
  const pic = localStorage.getItem("@pic");
  const access = localStorage.getItem("@access");
  return { name, email, id, pic, access };
};
export const getAccess = () =>
  localStorage.getItem(AUTH_ACCESS) === "admin" ? true : false;

export const login = (token, name, email, id, pic, access) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem("@name", name);
  localStorage.setItem("@email", email);
  localStorage.setItem("@id", id);
  localStorage.setItem("@pic", pic);
  localStorage.setItem("@access", access);
  localStorage.setItem(AUTH_USER, JSON.stringify({ name: name, email: email, id: id,pic: pic, token: token }));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(AUTH_USER);
  localStorage.removeItem("@name");
  localStorage.removeItem("@email");
  localStorage.removeItem("@id");
  localStorage.removeItem("@pic");
  localStorage.removeItem("@access");
  localStorage.clear()
};
