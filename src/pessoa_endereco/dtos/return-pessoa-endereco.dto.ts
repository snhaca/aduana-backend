/* eslint-disable prettier/prettier */ 
import { ReturnCidadeDTO } from "src/cidade/dtos/return-cidade.dto";
import { PessoaEnderecoEntity } from "../entities/pessoa_endereco.entity";

export class ReturnPessoaEnderecoDTO { 
  complemento: string; 
  numero: number; 
  bairro: string; 
  quarteirao: string;  
  cidade?: ReturnCidadeDTO

  constructor(endereco: PessoaEnderecoEntity){
    this.complemento = endereco.complemento;
    this.numero = endereco.numero;
    this.bairro = endereco.bairro;
    this.quarteirao = endereco.quarteirao;
    this.cidade = endereco.cidade ? new ReturnCidadeDTO(endereco.cidade) : undefined;
  }
}