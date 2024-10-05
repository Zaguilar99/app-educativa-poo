// backend/routes/exerciseRoutes.js
const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exerciseController");
const { protect } = require("../middleware/authMiddleware");

// Obtener todos los ejercicios
router.get("/", protect, exerciseController.getAllExercises);

// Generar un nuevo ejercicio con IA
router.post("/generate", protect, exerciseController.generateExercise);

// Enviar solución para evaluación
router.post("/:id/submit", protect, exerciseController.submitSolution);

module.exports = router;
