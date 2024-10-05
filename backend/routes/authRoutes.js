// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Registro de usuarios
router.post("/register", authController.register);

// Inicio de sesión
router.post("/login", authController.login);

module.exports = router;
