/* eslint-disable prettier/prettier */
import { UsuarioEntity } from "src/usuario/entities/usuario.entity";

export class LoginPayload {
  id: number;
  tipoUsuario: number;

  constructor(usuario: UsuarioEntity) {
    this.id = usuario.id;
    this.tipoUsuario = usuario.tipoUsuario;
  }
}
