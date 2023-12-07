/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCliente {
  @IsNumber() 
  idPessoa: number;
  
  @IsString()
  @IsOptional()
  desde: string;

  @IsNumber() 
  taxaDesconto: number;
  
  @IsNumber() 
  limiteCredito: number;

  @IsString()
  @IsOptional()
  observacao: string;  
}