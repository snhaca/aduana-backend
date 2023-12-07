/* eslint-disable prettier/prettier */
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateExportador {
  @IsNumber() 
  idPessoa: number;
  
  @IsDate()
  @IsOptional()
  desde: Date; 

  @IsString()
  @IsOptional()
  observacao: string;  
}