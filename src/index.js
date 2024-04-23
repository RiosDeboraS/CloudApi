// **Librerías:** Importamos Express y Mongoose, y configuramos dotenv para las variables de entorno.
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./Routes/auth");
const loginRoutes = require("./Routes/login");

const app = express();

app.listen(3000, () => console.log("¡Hola! Estoy funcionando correctamente."));

// Ruta raíz '/'

app.get("/", (req, res) => {
  res.send("¡Hola! Estoy funcionando.");
});

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/login", loginRoutes);

mongoose
  .connect(process.env.MONGOSE_URI)
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch(() => console.log("Error al conectar a la base de datos"));
