/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";

export class CreateInstrucaoDocRecebido {
  @IsString()
  nome: string;

  @IsString() 
  descricao: string; 

  @IsNumber() 
  idInstrucao: number;

  @IsNumber() 
  idInstrucaoDocumento: number;
}