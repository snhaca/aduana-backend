/* eslint-disable prettier/prettier */
import { IsInt, IsString } from "class-validator";

export class CreatePessoaTelefone {
  @IsInt()
  idPessoa: number;

  @IsString() 
  tipo: string;
  
  @IsString() 
  numero: string; 
}
 