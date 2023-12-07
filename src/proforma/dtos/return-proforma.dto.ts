/* eslint-disable prettier/prettier */
import { ReturnClienteDto } from 'src/cliente/dtos/return-cliente.dto';
import { ReturnInstrucaoDto } from 'src/instrucao/dto/return-instrucao.dto';
import { Proforma } from '../entities/proforma.entity';
 
export class ReturnProformaDto { 
  numero: number;
  estagio: string;
  cambio: number;
  cambioCcompra: number;
  cif: number;
  cifMzn: number;
  totalAlfandega: number;
  totalOEntidades: number;
  totalServico: number;
  ivaServico: number;
  total: number;
  totalMe: number;
  extenso: string;
  extensoMe: string;
  observacao: string;
  usuarioCadastro: string;
  usuarioAtualiza: string;
  instrucao?: ReturnInstrucaoDto;
  cliente: ReturnClienteDto;

  constructor(proforma: Proforma) {
    this.numero =   proforma.numero;
    this.estagio =   proforma.estagio;
    this.cambio =   proforma.cambio;
    this.cambioCcompra =   proforma.cambioCompra;
    this.cif =   proforma.cif;
    this.cifMzn =   proforma.cifMzn;
    this.totalAlfandega =   proforma.totalAlfandega;
    this.totalOEntidades =   proforma.totalOEntidades;
    this.totalServico =   proforma.totalServico;
    this.ivaServico =   proforma.ivaServico;
    this.total =   proforma.total;
    this.totalMe =   proforma.totalMe;
    this.extenso =   proforma.extenso;
    this.extensoMe =   proforma.extensoMe;
    this.observacao =   proforma.observacao;
    this.usuarioCadastro =   proforma.usuarioCadastro;
    this.usuarioAtualiza =   proforma.usuarioAtualiza;

    this.instrucao =   proforma.instrucao
      ? new ReturnInstrucaoDto(  proforma.instrucao)
      : undefined;
    this.cliente =   proforma.cliente
      ? new ReturnClienteDto(  proforma.cliente)
      : undefined;
  }
}
