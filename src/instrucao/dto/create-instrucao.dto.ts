import { IsNumber, IsString } from 'class-validator';

export class CreateInstrucaoDto {
  @IsNumber()
  idCliente: number;

  @IsNumber()
  idExportador: number;

  @IsNumber()
  idImportador: number;

  @IsNumber()
  idRegimeAduaneiro: number;

  @IsNumber()
  idMoeda: number;

  @IsNumber()
  idTerminal: number;

  @IsNumber()
  idTransporte: number;

  @IsNumber()
  idServico: number;

  @IsNumber()
  numero: number;

  @IsNumber()
  ano: number;

  @IsString()
  referencia: string;

  @IsString()
  numeroAt: string;

  @IsString()
  contramarca: string;

  @IsString()
  mercadoria: string;

  @IsString()
  numFatura: string;

  @IsNumber()
  totalFatura: number;

  @IsNumber()
  fob: number;

  @IsNumber()
  frete: number;

  @IsNumber()
  seguro: number;

  @IsNumber()
  outrosCustos: number;

  @IsNumber()
  cif: number;

  @IsString()
  observacao: string;
}
