const User = require("../modelos/userModel");

const bcrypt = require("bcrypt");

class RegistroController {
  async register(req, res) {
    try {
      console.log("Body:", req.body);
      const {
        correoElectronico,
        nombreUsuario,
        contrasena,
        confirmarContrasena,
      } = req.body;

      // Verificar si el correo electrónico ya está en uso
      const userFound = await User.findOne({
        correo_electronico: correoElectronico,
      });
      if (userFound) {
        return res
          .status(400)
          .json({ message: "El correo electrónico ya está en uso" });
      }

      // Verificar si las contraseñas coinciden
      if (contrasena !== confirmarContrasena) {
        return res
          .status(400)
          .json({ message: "Las contraseñas no coinciden" });
      }

      // Hashear la contraseña
      const hashedPassword = await bcrypt.hash(contrasena, 10);

      // Crear un nuevo usuario
      const newUser = new User({
        correo_electronico: correoElectronico,
        nombre_usuario: nombreUsuario,
        contrasena: hashedPassword,
        fecha_registro: Date.now(),
        rol: "usuario", // Assuming default role
        estado: "activo", // Assuming default state
      });

      // Guardar el nuevo usuario en la base de datos
      // Save the new user with auto-generated _id
      await newUser.save();

      res.status(201).json({ message: "Usuario creado con éxito" });
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).json({
          message: "El nombre de usuario o el correo electrónico ya existe",
        });
      } else {
        console.error(error);
        res.status(500).json({ message: "Error al crear el usuario" });
      }
    }
  }
}

module.exports = RegistroController;
