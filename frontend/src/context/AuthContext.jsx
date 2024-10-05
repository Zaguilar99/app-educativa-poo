import React, { createContext, useState, useEffect } from "react";
import {
  login as loginService,
  register as registerService,
} from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (credentials) => {
    try {
      const data = await loginService(credentials);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response.data.error };
    }
  };

  const register = async (userData) => {
    try {
      await registerService(userData);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response.data.error };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
