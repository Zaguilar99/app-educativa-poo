import axios from "axios";

// URL base de la API para ejercicios
const API_URL = "http://localhost:5000/api/exercises";

// Función para obtener todos los ejercicios
export const getExercises = () => {
  return axios.get(API_URL);
};

// Función para enviar una solución de código
export const submitSolution = (exerciseId, code) => {
  return axios.post(`${API_URL}/${exerciseId}/submit`, { code });
};
