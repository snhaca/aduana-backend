/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";

export class CreateEmpresaContato {
    @IsNumber() 
    idEmpresa: number;
  
    @IsString()
    nome: string;
  
    @IsString()
    email: string;
  
    @IsString()
    observacao: string;   
}