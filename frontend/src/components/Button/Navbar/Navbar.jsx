import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-500">
          AppEducativaPOO
        </Link>
        <div className="space-x-4">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-500"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-gray-700 hover:text-blue-500"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-500">
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="text-gray-700 hover:text-blue-500"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
