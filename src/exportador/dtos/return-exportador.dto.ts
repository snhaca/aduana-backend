/* eslint-disable prettier/prettier */ 
import { ReturnPessoa } from "src/pessoa/dtos/return-pessoa.dto"; 
import { Exportador } from "../entities/exportador.entity";

export class ReturnExportador {  
  desde: Date;  
  observacao: string;  
  pessoa?: ReturnPessoa;

  constructor(exportador: Exportador){ 
    this.desde = exportador.desde; 
    this.observacao = exportador.observacao;
    this.pessoa = exportador.pessoa ? new ReturnPessoa(exportador.pessoa) : undefined;
  }
}