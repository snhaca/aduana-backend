/* eslint-disable prettier/prettier */
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCliente {
  @IsNumber() 
  idPessoa: number;
  
  @IsDate()
  desde: string;

  @IsNumber() 
  taxaDesconto: number;
  
  @IsNumber() 
  limiteCredito: string;

  @IsString()
  @IsOptional()
  observacao: string;  
}