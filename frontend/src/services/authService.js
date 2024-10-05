import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials).then((response) => {
    const { token, user } = response.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return { user, token };
  });
};
