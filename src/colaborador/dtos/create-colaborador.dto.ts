/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsDate, IsOptional } from "class-validator";

export class CreateColaborador {    
    @IsNumber() 
    idPessoa: number; 

    @IsNumber() 
    idEstadoCivil: number;   
    
    @IsNumber() 
    idSetor: number;
       
    @IsNumber() 
    idNivelFormacao: number;
   
    @IsString()
    nomePai: string;
   
    @IsString()
    nomeMae: string;
    
    @IsString()
    raca: string;
   
    @IsString()
    sexo: string;
    
    @IsString()
    naturalidade: string;
   
    @IsString()
    nacionalidade: string;
    
    @IsDate()
    @IsOptional()
    dataNascimento: Date;
   
    @IsDate()
    @IsOptional()
    dataAdmissao: Date;  
      
    @IsDate()
    @IsOptional()
    dataDemissao: Date;
   
    @IsDate()
    @IsOptional()
    desde: Date;
}