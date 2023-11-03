/* eslint-disable prettier/prettier */
import { IsInt, IsOptional, IsString } from "class-validator";

export class CreatePessoaEnderecoDTO {
  @IsString()
  complemento: string;

  @IsInt()
  @IsOptional()
  numero: number;
  
  @IsString()
  @IsOptional()
  bairro: string;

  @IsString()
  @IsOptional()
  quarteirao: string; 

  @IsInt() 
  idCidade: number;
}