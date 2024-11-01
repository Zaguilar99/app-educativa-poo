// frontend/src/services/api.js

import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // 'http://localhost:5000/api'
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Si necesitas enviar cookies
});

// Interceptor para agregar el token JWT en cada solicitud
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // O de donde lo almacenes
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
