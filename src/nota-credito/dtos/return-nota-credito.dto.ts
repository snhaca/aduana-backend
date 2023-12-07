import { ReturnClienteDto } from 'src/cliente/dtos/return-cliente.dto';
import { ReturnInstrucaoDto } from 'src/instrucao/dto/return-instrucao.dto';
import { Credito } from '../entities/credito.entity';

export class ReturnCreditoDto {
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

  constructor(credito: Credito) {
    this.numero = credito.numero;
    this.estagio = credito.estagio;
    this.cambio = credito.cambio;
    this.cambioCcompra = credito.cambioCompra;
    this.cif = credito.cif;
    this.cifMzn = credito.cifMzn;
    this.totalAlfandega = credito.totalAlfandega;
    this.totalOEntidades = credito.totalOEntidades;
    this.totalServico = credito.totalServico;
    this.ivaServico = credito.ivaServico;
    this.total = credito.total;
    this.totalMe = credito.totalMe;
    this.extenso = credito.extenso;
    this.extensoMe = credito.extensoMe;
    this.observacao = credito.observacao;
    this.usuarioCadastro = credito.usuarioCadastro;
    this.usuarioAtualiza = credito.usuarioAtualiza;

    this.instrucao = credito.instrucao
      ? new ReturnInstrucaoDto(credito.instrucao)
      : undefined;
    this.cliente = credito.cliente
      ? new ReturnClienteDto(credito.cliente)
      : undefined;
  }
}
