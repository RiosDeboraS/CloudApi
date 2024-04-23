const express = require("express");

const RegistroController = require("../controllers/RegistroController");

const router = express.Router();

const registroController = new RegistroController();

// Ruta para registrar un usuario
router.post("/register", registroController.register);

module.exports = router;
