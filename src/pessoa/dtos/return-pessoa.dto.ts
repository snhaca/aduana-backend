/* eslint-disable prettier/prettier */
import { PessoaEntity } from "../entities/pessoa.entity";

export class ReturnPessoaDTO {
  id: number;
  nome: string;
  email: string; 
  nuit: string;  
  site: string;  
  cliente: string;  
  fornecedor: string;  
  importador: string;  
  exportador: string;  
  contador: string;  
  transportador: string;  

  constructor(pessoaEntity: PessoaEntity) {
    this.id = pessoaEntity.id;
    this.nome = pessoaEntity.nome;
    this.email = pessoaEntity.email; 
    this.nuit = pessoaEntity.nuit;  
    this.site = pessoaEntity.site;  
    this.cliente = pessoaEntity.cliente;  
    this.fornecedor = pessoaEntity.fornecedor;  
    this.importador = pessoaEntity.importador;  
    this.exportador = pessoaEntity.exportador;  
    this.contador = pessoaEntity.contador;  
    this.transportador = pessoaEntity.transportador;  
  }
}
