const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre_usuario: { type: String, required: true, unique: true },
  correo_electronico: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  fecha_registro: { type: Date, default: Date.now },
  rol: { type: String, enum: ["admin", "usuario"], default: "usuario" },
  estado: { type: String, enum: ["activo", "inactivo"], default: "activo" },
});

module.exports = mongoose.model("User", userSchema);
