/* eslint-disable prettier/prettier */
import { ReturnClienteDto } from 'src/cliente/dtos/return-cliente.dto';
import { ReturnInstrucaoDto } from 'src/instrucao/dto/return-instrucao.dto';
import { Debito } from '../entities/debito.entity';
 
export class ReturnDebitoDto { 
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

  constructor(debito: Debito) {
    this.numero =  debito.numero;
    this.estagio =  debito.estagio;
    this.cambio =  debito.cambio;
    this.cambioCcompra =  debito.cambioCompra;
    this.cif =  debito.cif;
    this.cifMzn =  debito.cifMzn;
    this.totalAlfandega =  debito.totalAlfandega;
    this.totalOEntidades =  debito.totalOEntidades;
    this.totalServico =  debito.totalServico;
    this.ivaServico =  debito.ivaServico;
    this.total =  debito.total;
    this.totalMe =  debito.totalMe;
    this.extenso =  debito.extenso;
    this.extensoMe =  debito.extensoMe;
    this.observacao =  debito.observacao;
    this.usuarioCadastro =  debito.usuarioCadastro;
    this.usuarioAtualiza =  debito.usuarioAtualiza;

    this.instrucao =  debito.instrucao
      ? new ReturnInstrucaoDto( debito.instrucao)
      : undefined;
    this.cliente =  debito.cliente
      ? new ReturnClienteDto( debito.cliente)
      : undefined;
  }
}
