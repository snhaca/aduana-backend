/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class UpdateProformaDto {
  @IsNumber()
  numero: number;

  @IsString()
  estagio: string;

  @IsNumber()
  cambio: number;

  @IsNumber()
  cambioCompra: number;

  @IsNumber()
  cif: string;

  @IsNumber()
  cifMzn: number;

  @IsNumber()
  totalAlfandega: number;

  @IsNumber()
  totalOEntidades: number;

  @IsNumber()
  totalServico: number;

  @IsNumber()
  ivaServico: number;

  @IsNumber()
  total: number;

  @IsNumber()
  totalMe: number;

  @IsString()
  extenso: string;

  @IsString()
  extensoMe: string;

  @IsString()
  observacao: string;

  @IsString()
  usuarioAtualiza: string;

  @IsNumber()
  idInstrucao: number;

  @IsNumber()
  idCliente: number;  
}
