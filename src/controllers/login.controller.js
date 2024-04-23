const User = require("../modelos/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class Login {
  async login(req, res) {
    try {
      // Extract login credentials
      const { correoElectronico, contrasena } = req.body;
      console.log("Credenciales de inicio de sesión recibidas:", req.body);

      // Find the user by email
      const user = await User.findOne({
        correo_electronico: correoElectronico,
      });
      console.log("Usuario encontrado en la base de datos:", user);

      if (!user) {
        console.log("Usuario no encontrado en la base de datos");
        return res
          .status(401)
          .json({ message: "Usuario o contraseña incorrectos" });
      }

      // Compare hashed passwords
      const isPasswordMatch = await bcrypt.compare(contrasena, user.contrasena);
      console.log("¿Las contraseñas coinciden?", isPasswordMatch);

      if (!isPasswordMatch) {
        console.log("Contraseña incorrecta");
        return res
          .status(401)
          .json({ message: "Usuario o contraseña incorrectos" });
      }

      // Generate and assign a JSON Web Token (JWT)
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      console.log("Token generado:", token);

      // Send successful response with JWT token
      res.status(200).json({ token: token, user: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al iniciar sesión" });
    }
  }
}

module.exports = Login;
