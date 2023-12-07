/* eslint-disable prettier/prettier */
import { ReturnClienteDto } from 'src/cliente/dtos/return-cliente.dto';
import { Instrucao } from '../entities/instrucao.entity';
import { ReturnExportador } from 'src/exportador/dtos/return-exportador.dto';
import { ReturnTransporte } from 'src/transporte/dto/return-transporte.dto';
import { ReturnTerminal } from 'src/terminal/dto/return-terminal.dto';
import { ReturnServico } from 'src/servico/dto/return-servico.dto';
import { ReturnMoeda } from 'src/moeda/dto/return-moeda.dto';
import { ReturnRegimeAduaneiro } from 'src/regime-aduaneiro/dto/return-regime-aduaneiro.dto';
import { ReturnImportador } from 'src/importador/dtos/return-importador.dto';
import { ReturnInstrucaoDtoControlo } from 'src/instrucao-controlo/dto/return-instrucao-controlo.dto';
import { ReturnInstrucaoDtoDespesa } from 'src/instrucao-despesa/dto/return-instrucao-despesa.dto';
import { ReturnInstrucaoDtoDocRecebido } from 'src/instrucao-doc-recebido/dto/return-instrucao-doc-recebido.dto';
 
export class ReturnInstrucaoDto { 
  numero: number;
  ano: number;
  referencia: string;
  numeroAt: string;
  contramarca: string;
  mercadoria: string;
  numFatura: string;
  totalFatura: number;
  fob: number;
  frete: number;
  seguro: number;
  outrosCustos: number;
  cif: number;
  observacao: string; 

  cliente?: ReturnClienteDto;
  exportador?: ReturnExportador;
  importador?: ReturnImportador;
  regime?: ReturnRegimeAduaneiro;
  moeda?: ReturnMoeda;
  servico?: ReturnServico;
  terminal?: ReturnTerminal;
  transporte?: ReturnTransporte;

  controlos?: ReturnInstrucaoDtoControlo[];
  docRecebidos?: ReturnInstrucaoDtoDocRecebido[];
  despesas?: ReturnInstrucaoDtoDespesa[]; 

  constructor(instrucao: Instrucao) { 
    this.numero = instrucao.numero;
    this.ano = instrucao.ano;
    this.referencia = instrucao.referencia;
    this.numeroAt = instrucao.numeroAt;
    this.contramarca = instrucao.contramarca;
    this.mercadoria = instrucao.mercadoria;
    this.numFatura = instrucao.numFatura;
    this.totalFatura = instrucao.totalFatura;
    this.fob = instrucao.fob;
    this.frete = instrucao.frete;
    this.seguro = instrucao.seguro;
    this.outrosCustos = instrucao.outrosCustos;
    this.cif = instrucao.cif;
    this.observacao = instrucao.observacao; 

    this.cliente = instrucao.cliente ? new ReturnClienteDto(instrucao.cliente) : undefined;
    this.exportador = instrucao.exportador ? new ReturnExportador(instrucao.exportador) : undefined;
    this.importador = instrucao.importador ? new ReturnImportador(instrucao.importador) : undefined;
    this.regime = instrucao.regime ? new ReturnRegimeAduaneiro(instrucao.regime) : undefined;
    this.moeda = instrucao.moeda ? new ReturnMoeda(instrucao.moeda) : undefined;
    this.servico = instrucao.servico ? new ReturnServico(instrucao.servico) : undefined;
    this.terminal = instrucao.terminal ? new ReturnTerminal(instrucao.terminal) : undefined;
    this.transporte = instrucao.transporte ? new ReturnTransporte(instrucao.transporte) : undefined;

    this.controlos = instrucao.controlos 
    ? instrucao.controlos.map((controlo) => new ReturnInstrucaoDtoControlo(controlo)) 
    : undefined;   

    this.docRecebidos = instrucao.docRecebidos 
    ? instrucao.docRecebidos.map((docRecebido) => new ReturnInstrucaoDtoDocRecebido(docRecebido)) 
    : undefined; 

    this.despesas = instrucao.despesas 
    ? instrucao.despesas.map((despesa) => new ReturnInstrucaoDtoDespesa(despesa)) 
    : undefined; 
  }
}
