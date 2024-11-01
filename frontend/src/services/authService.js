// frontend/src/services/authService.js

import api from "./api";

export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  const { token, user } = response.data;

  // Almacenar el token en localStorage
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  return { user };
};

export const register = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  // Opcional: limpiar el encabezado de autorización en Axios
  api.defaults.headers.common["Authorization"] = "";
};
