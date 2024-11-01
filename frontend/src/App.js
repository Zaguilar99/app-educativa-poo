// src/App.js

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Button/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
// Importa otros componentes según sea necesario

function App() {
  return (
    <Router>
      {/* Navbar visible en todas las páginas */}
      <Navbar />
      <Routes>
        {/* Redirigir la ruta raíz "/" al Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Definir la ruta para el Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Definir la ruta para Home */}
        <Route path="/home" element={<Home />} />

        {/* Definir la ruta para Login */}
        <Route path="/login" element={<Login />} />

        {/* Definir la ruta para Register */}
        <Route path="/register" element={<Register />} />

        {/* Manejar rutas no encontradas (404) */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
