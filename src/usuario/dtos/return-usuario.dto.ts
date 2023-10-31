/* eslint-disable prettier/prettier */ 
import { UsuarioEntity } from '../entities/usuario.entity';

export class ReturnUsuarioDTO {
  id: number;
  nome: string;
  email: string; 
  nuit: string;  

  constructor(usuarioEntity: UsuarioEntity) {
    this.id = usuarioEntity.id;
    this.nome = usuarioEntity.nome;
    this.email = usuarioEntity.email; 
    this.nuit = usuarioEntity.nuit;  
  }
}
