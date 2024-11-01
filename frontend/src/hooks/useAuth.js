// frontend/src/hooks/useAuth.js

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/**
 * Hook personalizado para acceder al contexto de autenticación.
 *
 * @returns {object} - Contiene el usuario y las funciones de autenticación.
 */
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
