/* eslint-disable prettier/prettier */
import { ReturnPessoaEnderecoDTO } from "src/pessoa_endereco/dtos/return-pessoa-endereco.dto";
import { PessoaEntity } from "../entities/pessoa.entity"; 

export class ReturnPessoaDTO {
  id: number;
  nome: string;
  email: string; 
  nuit: string;  
  site: string;  
  ehCliente: string;  
  ehFornecedor: string;  
  ehImportador: string;  
  ehExportador: string;  
  ehContador: string;  
  ehTransportador: string;  
  enderecos?: ReturnPessoaEnderecoDTO[];

  constructor(pessoaEntity: PessoaEntity) {
    this.id = pessoaEntity.id;
    this.nome = pessoaEntity.nome;
    this.email = pessoaEntity.email; 
    this.nuit = pessoaEntity.nuit;  
    this.site = pessoaEntity.site;  
    this.ehCliente = pessoaEntity.ehCliente;  
    this.ehFornecedor = pessoaEntity.ehFornecedor;  
    this.ehImportador = pessoaEntity.ehImportador;  
    this.ehExportador = pessoaEntity.ehExportador;  
    this.ehContador = pessoaEntity.ehContador;  
    this.ehTransportador = pessoaEntity.ehTransportador;  

    this.enderecos = pessoaEntity.enderecos 
    ? pessoaEntity.enderecos.map((endereco) => new ReturnPessoaEnderecoDTO(endereco)) 
    : undefined;
  }
}
