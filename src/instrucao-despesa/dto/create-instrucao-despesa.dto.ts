/* eslint-disable prettier/prettier */
import { IsNumber } from "class-validator";

export class CreateInstrucaoDespesa {
  @IsNumber()
  quantidade: number;

  @IsNumber() 
  valorUnitario: number;
  
  @IsNumber() 
  valorTotal: number; 

  @IsNumber() 
  idInstrucao: number;

  @IsNumber() 
  idArtigo: number;
}