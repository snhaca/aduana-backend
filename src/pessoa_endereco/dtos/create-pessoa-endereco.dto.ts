/* eslint-disable prettier/prettier */
import { IsInt, IsString } from "class-validator";

export class CreatePessoaEnderecoDTO {
  @IsString()
  complemento: string;

  @IsInt()
  numero: number;
  
  @IsString()
  bairro: string;

  @IsString()
  quarteirao: string; 

  @IsInt() 
  idCidade: number;
}