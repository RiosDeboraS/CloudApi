const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, autocreate: true },
  nombre_video: { type: String, required: true },
  descripcion_video: { type: String },
  url_video: { type: String, required: true },
  formato_video: { type: String, required: true },
  duracion_video: { type: Number, required: true },
  fecha_publicacion: { type: Date, default: Date.now },
  visibilidad: {
    type: String,
    enum: ["publico", "privado"],
    default: "publico",
  },
  id_usuario: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Video", videoSchema);
