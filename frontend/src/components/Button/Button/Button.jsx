// src/components/Button/Button.jsx

import React from "react";
import "./Button.css";

/**
 * Componente Button
 *
 * @param {object} props - Propiedades del componente
 * @param {function} props.onClick - Función a ejecutar al hacer clic
 * @param {string} props.className - Clases CSS adicionales
 * @param {React.ReactNode} props.children - Contenido del botón
 */
function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
