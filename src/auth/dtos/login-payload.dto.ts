/* eslint-disable prettier/prettier */
import { Usuario } from "src/usuario/entities/usuario.entity";

export class LoginPayload {
  id: number;
  tipoUsuario: number;

  constructor(usuario: Usuario) {
    this.id = usuario.id;
    this.tipoUsuario = usuario.tipoUsuario;
  }
}
