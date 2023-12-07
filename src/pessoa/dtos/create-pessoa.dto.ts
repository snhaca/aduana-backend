/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreatePessoa {
  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  nuit: string;

  @IsString()
  site: string;
  
  @IsString()
  ehColaborador: string;

  @IsString()
  ehCliente: string;

  @IsString()
  ehFornecedor: string;

  @IsString()
  ehImportador: string;

  @IsString()
  ehExportador: string;

  @IsString()
  ehContador: string;

  @IsString()
  ehTransportador: string;

}