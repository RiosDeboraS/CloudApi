class RegisterDto {
  constructor(nombreUsuario, correoElectronico, contrasena) {
    this.nombreUsuario = nombreUsuario;
    this.correoElectronico = correoElectronico;
    this.contrasena = contrasena;
  }
}

module.exports = RegisterDto;
