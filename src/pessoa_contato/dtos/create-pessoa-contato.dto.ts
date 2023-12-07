/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator";

export class CreatePessoaContato {
    @IsNumber() 
    idPessoa: number;
  
    @IsString()
    nome: string;
  
    @IsString()
    email: string;
  
    @IsString()
    observacao: string;   
}