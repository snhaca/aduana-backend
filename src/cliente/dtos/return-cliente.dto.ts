/* eslint-disable prettier/prettier */ 
import { ReturnPessoa } from "src/pessoa/dtos/return-pessoa.dto";
import { Cliente } from "../entities/cliente.entity";

export class ReturnClienteDto {  
  desde: Date; 
  taxaDesconto: number; 
  limiteCredito: number; 
  observacao: string;  
  pessoa?: ReturnPessoa;

  constructor(cliente: Cliente){ 
    this.desde = cliente.desde;
    this.taxaDesconto = cliente.taxaDesconto;
    this.limiteCredito = cliente.limiteCredito;
    this.observacao = cliente.observacao;
    this.pessoa = cliente.pessoa ? new ReturnPessoa(cliente.pessoa) : undefined;
  }
}