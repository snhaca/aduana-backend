/* eslint-disable prettier/prettier */
import { IsInt, IsString } from "class-validator";

export class CreateEmpresaTelefone {
  @IsInt()
  idEmpresa: number;

  @IsString() 
  tipo: string;
  
  @IsString() 
  numero: string; 
}
 