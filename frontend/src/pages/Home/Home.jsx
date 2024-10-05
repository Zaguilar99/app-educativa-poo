import React from "react";
import Button from "../../components/Button/Button"; // Asegúrate de tener el componente Button
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Bienvenido a la Aplicación Educativa POO
      </h1>
      <p className="mb-6 text-center max-w-md">
        Mejora tu rendimiento en el curso de Programación Orientada a Objetos
        utilizando ejercicios interactivos generados por Inteligencia
        Artificial.
      </p>
      <div className="space-x-4">
        <Link to="/register">
          <Button>Registrarse</Button>
        </Link>
        <Link to="/login">
          <Button className="bg-green-500 hover:bg-green-600">
            Iniciar Sesión
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
