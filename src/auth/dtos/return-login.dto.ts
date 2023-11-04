/* eslint-disable prettier/prettier */ 
import { ReturnUsuario } from "src/usuario/dtos/return-usuario.dto";

export interface ReturnLogin {
  usuario: ReturnUsuario;
  accessToken: string;
}
