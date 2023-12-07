/* eslint-disable prettier/prettier */
import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateInstrucaoControlo {
  @IsString()
  operacao: string;

  @IsString() 
  estagio: string;
  
  @IsString()
  @IsOptional()
  observacao: string; 

  @IsInt() 
  idInstrucao: number;

  @IsInt() 
  idInstrucaoEstagio: number;
}