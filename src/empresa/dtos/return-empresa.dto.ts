/* eslint-disable prettier/prettier */
import { ReturnEmpresaEndereco } from "src/empresa_endereco/dtos/return-empresa-endereco.dto";
import { Empresa } from "../entities/empresa.entity"; 
import { ReturnEmpresaTelefone } from "src/empresa_telefone/dtos/return-empresa-telefone.dto";
import { ReturnEmpresaContato } from "src/empresa_contato/dtos/return-empresa-contato.dto";

export class ReturnEmpresa { 
  nome: string;
  nomeFantasia: string;
  nuit: string;
  email: string;
  site: string;
  tipo: string;
  regime: string; 
  contatos?: ReturnEmpresaContato[];
  telefones?: ReturnEmpresaTelefone[];
  enderecos?: ReturnEmpresaEndereco[];

  constructor(empresa: Empresa) { 
    this.nome = empresa.nome;
    this.nomeFantasia = empresa.nomeFantasia;
    this.nuit = empresa.nuit;
    this.email = empresa.email;
    this.site = empresa.site;
    this.tipo = empresa.tipo;
    this.regime = empresa.regime;

    this.contatos = empresa.contatos 
    ? empresa.contatos.map((contato) => new ReturnEmpresaContato(contato)) 
    : undefined;

    this.enderecos = empresa.enderecos 
    ? empresa.enderecos.map((endereco) => new ReturnEmpresaEndereco(endereco)) 
    : undefined;
    
    this.telefones = empresa.telefones 
    ? empresa.telefones.map((telefone) => new ReturnEmpresaTelefone(telefone)) 
    : undefined; 
  }
}
