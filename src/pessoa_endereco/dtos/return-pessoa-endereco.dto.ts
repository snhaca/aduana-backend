/* eslint-disable prettier/prettier */ 
import { ReturnCidade } from "src/cidade/dtos/return-cidade.dto";
import { PessoaEndereco } from "../entities/pessoa_endereco.entity";

export class ReturnPessoaEndereco { 
  complemento: string; 
  numero: number; 
  bairro: string; 
  quarteirao: string;  
  cidade?: ReturnCidade

  constructor(endereco: PessoaEndereco){
    this.complemento = endereco.complemento;
    this.numero = endereco.numero;
    this.bairro = endereco.bairro;
    this.quarteirao = endereco.quarteirao;
    this.cidade = endereco.cidade ? new ReturnCidade(endereco.cidade) : undefined;
  }
}