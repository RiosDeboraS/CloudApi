// **Librerías:** Importamos Express y Mongoose, y configuramos dotenv para las variables de entorno.
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// **Servidor Express:** Inicializamos la aplicación Express y la configuramos para escuchar en el puerto 3000.
const app = express();
app.listen(3000, () => console.log("¡Hola! Estoy funcionando correctamente."));

// **Rutas:**

// Ruta raíz '/' que devuelve un mensaje simple como prueba de funcionamiento.
app.get("/", (req, res) => {
  res.send("¡Hola! Estoy funcionando."); // Devolvemos un mensaje como respuesta.
});

// **Conexión a la base de datos:**

// **Variables de entorno:** Se utiliza la variable de entorno MONGOSE_URI para la conexión a la base de datos MongoDB.
// **Conexión con promesas:** Se utiliza mongoose.connect con promesas para manejar la conexión a la base de datos de forma asincrónica.
// **Mensajes de éxito y error:** Se muestran mensajes en la consola para indicar si la conexión a la base de datos se realizó correctamente o no.

mongoose
  .connect(process.env.MONGOSE_URI)
  .then(() => console.log("Base de datos conectada correctamente"))
  .catch(() => console.log("Error al conectar a la base de datos"));
