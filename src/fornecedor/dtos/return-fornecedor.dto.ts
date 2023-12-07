/* eslint-disable prettier/prettier */  
import { ReturnPessoa } from "src/pessoa/dtos/return-pessoa.dto";  
import { Fornecedor } from "../entities/fornecedor.entity";

export class ReturnFornecedor {  
  desde: Date;  
  observacao: string;  
  pessoa?: ReturnPessoa;

  constructor(fornecedor: Fornecedor){ 
    this.desde = fornecedor.desde; 
    this.observacao = fornecedor.observacao;
    this.pessoa = fornecedor.pessoa ? new ReturnPessoa(fornecedor.pessoa) : undefined;
  }
}