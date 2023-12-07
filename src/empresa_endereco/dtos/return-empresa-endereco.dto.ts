/* eslint-disable prettier/prettier */ 
import { ReturnCidade } from "src/cidade/dtos/return-cidade.dto";  
import { EmpresaEndereco } from "../entities/empresa-endereco.entity";

export class ReturnEmpresaEndereco { 
  complemento: string; 
  numero: number; 
  bairro: string; 
  quarteirao: string;  
  cidade?: ReturnCidade;

  constructor(endereco: EmpresaEndereco){
    this.complemento = endereco.complemento;
    this.numero = endereco.numero;
    this.bairro = endereco.bairro;
    this.quarteirao = endereco.quarteirao;
    this.cidade = endereco.cidade ? new ReturnCidade(endereco.cidade) : undefined;
  }
}