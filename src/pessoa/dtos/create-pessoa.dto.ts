/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreatePessoaDTO {
  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  nuit: string;

  @IsString()
  site: string;
  
  @IsString()
  cliente: string;

  @IsString()
  fornecedor: string;

  @IsString()
  importador: string;

  @IsString()
  exportador: string;

  @IsString()
  contador: string;

  @IsString()
  transportador: string;

}