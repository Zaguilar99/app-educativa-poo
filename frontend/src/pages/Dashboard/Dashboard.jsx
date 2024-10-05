import React, { useEffect, useState } from "react";
import { getExercises } from "../../services/exerciseService";
import Exercise from "../../components/Exercise/Exercise";

const Dashboard = () => {
  const [exercises, setExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const res = await getExercises(); // Llama al servicio que obtiene ejercicios
      setExercises(res.data); // Almacena los ejercicios en el estado
      setCurrentExercise(res.data[0]); // Comienza con el primer ejercicio
    } catch (err) {
      setError("Error al cargar los ejercicios");
    }
  };

  const handleNextExercise = () => {
    const currentIndex = exercises.findIndex(
      (ex) => ex._id === currentExercise._id
    );
    if (currentIndex < exercises.length - 1) {
      setCurrentExercise(exercises[currentIndex + 1]); // Cambia al siguiente ejercicio
    } else {
      setCurrentExercise(null); // No hay más ejercicios
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {error && <div className="mb-4 text-red-500">{error}</div>}
      {currentExercise ? (
        <Exercise exercise={currentExercise} onNext={handleNextExercise} />
      ) : (
        <div className="text-center text-gray-700">
          ¡Felicidades! Has completado todos los ejercicios disponibles.
        </div>
      )}
    </div>
  );
};

export default Dashboard;
