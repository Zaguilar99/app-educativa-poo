// src/components/Navbar/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold text-xl">
          <Link to="/dashboard">AppEducativaPOO</Link>
        </div>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/home" className="hover:underline">
            Home
          </Link>
          <Link to="/login" className="hover:underline">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="hover:underline">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
