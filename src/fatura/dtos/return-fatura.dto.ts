import { ReturnInstrucaoDto } from 'src/instrucao/dto/return-instrucao.dto';
import { Fatura } from '../entities/fatura.entity';
import { ReturnClienteDto } from 'src/cliente/dtos/return-cliente.dto';
import { ReturnFaturaItemDto } from 'src/fatura-item/dtos/return-fatura-item.dto';

export class ReturnFaturaDto {
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
  cliente?: ReturnClienteDto;

  items?: ReturnFaturaItemDto[];

  constructor(fatura: Fatura) {
    this.numero = fatura.numero;
    this.estagio = fatura.estagio;
    this.cambio = fatura.cambio;
    this.cambioCcompra = fatura.cambioCompra;
    this.cif = fatura.cif;
    this.cifMzn = fatura.cifMzn;
    this.totalAlfandega = fatura.totalAlfandega;
    this.totalOEntidades = fatura.totalOEntidades;
    this.totalServico = fatura.totalServico;
    this.ivaServico = fatura.ivaServico;
    this.total = fatura.total;
    this.totalMe = fatura.totalMe;
    this.extenso = fatura.extenso;
    this.extensoMe = fatura.extensoMe;
    this.observacao = fatura.observacao;
    this.usuarioCadastro = fatura.usuarioCadastro;
    this.usuarioAtualiza = fatura.usuarioAtualiza;

    this.instrucao = fatura.instrucao
      ? new ReturnInstrucaoDto(fatura.instrucao)
      : undefined;
    this.cliente = fatura.cliente
      ? new ReturnClienteDto(fatura.cliente)
      : undefined;

    this.items = fatura.faturaItems
      ? fatura.faturaItems.map((fatura) => new ReturnFaturaItemDto(fatura))
      : undefined;
  }
}
