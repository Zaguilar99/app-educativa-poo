// src/pages/Dashboard/Dashboard.jsx

import React from "react";
import Button from "../../components/Button/Button/Button";
import "./Dashboard.css";

function Dashboard() {
  const handleNextExercise = () => {
    // Lógica para avanzar al siguiente ejercicio
    console.log("Siguiente ejercicio");
  };

  return (
    <div className="dashboard-container bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Bienvenido al Dashboard</h1>
      <p className="text-lg mb-6">
        Aquí podrás ver y gestionar tus ejercicios, progreso y más.
      </p>
      <Button onClick={handleNextExercise} className="mt-4">
        Siguiente Ejercicio
      </Button>
    </div>
  );
}

export default Dashboard;
