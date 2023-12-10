/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateExportador {
  @IsNumber() 
  idPessoa: number;
  
  @IsString()
  @IsOptional()
  desde: string;

  @IsString()
  @IsOptional()
  observacao: string;  
}