// src/components/Exercise/Exercise.jsx
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Button from "../Button/Button/Button";
import { submitSolution } from "../../services/exerciseService";

const Exercise = ({ exercise, onNext }) => {
  const [code, setCode] = useState("// Escribe tu solución aquí");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setFeedback("");
    try {
      const res = await submitSolution(exercise._id, code);
      setFeedback(res.data.message);
    } catch (err) {
      setFeedback(err.response.data.error || "Error al evaluar la solución");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{exercise.title}</h2>
      <p className="mb-6">{exercise.description}</p>
      <Editor
        height="400px"
        defaultLanguage="java"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
      <div className="mt-4 flex space-x-4">
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Evaluando..." : "Enviar Solución"}
        </Button>
        <Button onClick={onNext} className="bg-green-500 hover:bg-green-600">
          Siguiente Ejercicio
        </Button>
      </div>
      {feedback && (
        <div className="mt-4 p-4 bg-gray-200 rounded">{feedback}</div>
      )}
    </div>
  );
};

export default Exercise;
