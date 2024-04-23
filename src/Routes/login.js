const express = require("express");

const Login = require("../controllers/login.controller");

const router = express.Router();

const loginController = new Login();

// Ruta para Loguear
router.post("/login", loginController.login);

module.exports = router;
