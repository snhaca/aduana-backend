/* eslint-disable prettier/prettier */
import { IsString, IsDate, IsOptional } from "class-validator";

export class CreateEmpresa {
     
    @IsString()
    nome: string;
   
    @IsString()
    @IsOptional()
    nomeFantasia: string;
    
    @IsString()
    nuit: string;
   
    @IsString()
    @IsOptional()
    nuel: string;
    
    @IsString()
    @IsOptional()
    alvara: string;
   
    @IsString()
    @IsOptional()
    email: string;
    
    @IsString()
    @IsOptional()
    site: string;
    
    @IsDate()
    @IsOptional()
    dataConstituicao: Date;   
    
    @IsString()
    @IsOptional()
    tipo: string;
    
    @IsString()
    @IsOptional()
    regime: string; 
}