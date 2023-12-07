/* eslint-disable prettier/prettier */
import { ReturnPessoaEndereco } from "src/pessoa_endereco/dtos/return-pessoa-endereco.dto";
import { Pessoa } from "../entities/pessoa.entity"; 
import { ReturnClienteDto } from "src/cliente/dtos/return-cliente.dto";
import { ReturnExportador } from "src/exportador/dtos/return-exportador.dto";
import { ReturnImportador } from "src/importador/dtos/return-importador.dto";
import { ReturnFornecedor } from "src/fornecedor/dtos/return-fornecedor.dto";
import { ReturnPessoaContato } from "src/pessoa_contato/dtos/return-pessoa-contato.dto";
import { ReturnPessoaTelefone } from "src/pessoa_telefone/dtos/return-pessoa-telefone.dto";
import { ReturnColaborador } from "src/colaborador/dtos/return-colaborador.dto";

export class ReturnPessoa {
  id: number;
  nome: string;
  email: string; 
  nuit: string;  
  site: string;  
  ehColaborador: string; 
  ehCliente: string;  
  ehFornecedor: string;  
  ehImportador: string;  
  ehExportador: string;  
  ehContador: string;  
  ehTransportador: string;  
  
  contatos?: ReturnPessoaContato[];
  enderecos?: ReturnPessoaEndereco[];
  telefones?: ReturnPessoaTelefone[];

  colaborador?: ReturnColaborador;
  cliennte?: ReturnClienteDto;
  exportador?: ReturnExportador;
  importador?: ReturnImportador;
  fornecedor?: ReturnFornecedor;

  constructor(pessoa: Pessoa) {
    this.id = pessoa.id;
    this.nome = pessoa.nome;
    this.email = pessoa.email; 
    this.nuit = pessoa.nuit;  
    this.site = pessoa.site;  
    this.ehColaborador = pessoa.ehColaborador;  
    this.ehCliente = pessoa.ehCliente;  
    this.ehFornecedor = pessoa.ehFornecedor;  
    this.ehImportador = pessoa.ehImportador;  
    this.ehExportador = pessoa.ehExportador;  
    this.ehContador = pessoa.ehContador;  
    this.ehTransportador = pessoa.ehTransportador; 
    
    this.contatos = pessoa.pContatos 
    ? pessoa.pContatos.map((contato) => new ReturnPessoaContato(contato)) 
    : undefined;   

    this.enderecos = pessoa.pEnderecos 
    ? pessoa.pEnderecos.map((endereco) => new ReturnPessoaEndereco(endereco)) 
    : undefined; 

    this.telefones = pessoa.pTelefones 
    ? pessoa.pTelefones.map((telefone) => new ReturnPessoaTelefone(telefone)) 
    : undefined; 

    this.colaborador = pessoa.colaborador ? new ReturnColaborador(pessoa.colaborador) : undefined;
    this.cliennte = pessoa.cliente ? new ReturnClienteDto(pessoa.cliente) : undefined;
    this.fornecedor = pessoa.fornecedor ? new ReturnFornecedor(pessoa.fornecedor) : undefined;
    this.exportador = pessoa.exportador ? new ReturnExportador(pessoa.exportador) : undefined;
    this.importador = pessoa.importador ? new ReturnImportador(pessoa.importador) : undefined;
  }
}
