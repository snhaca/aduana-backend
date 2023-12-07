/* eslint-disable prettier/prettier */ 
import { ReturnPessoa } from "src/pessoa/dtos/return-pessoa.dto";  
import { Importador } from "../entities/importador.entity";

export class ReturnImportador {  
  desde: Date;  
  observacao: string;  
  pessoa?: ReturnPessoa;

  constructor(importador: Importador){ 
    this.desde = importador.desde; 
    this.observacao = importador.observacao;
    this.pessoa = importador.pessoa ? new ReturnPessoa(importador.pessoa) : undefined;
  }
}