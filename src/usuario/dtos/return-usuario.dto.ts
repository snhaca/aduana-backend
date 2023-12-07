/* eslint-disable prettier/prettier */ 
import { Usuario } from '../entities/usuario.entity';

export class ReturnUsuario {
  id: number;
  nome: string;
  email: string;   

  constructor(usuario: Usuario) {
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;   
  }
}
