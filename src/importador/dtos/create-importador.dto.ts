/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateImportador {
    @IsNumber()
    idPessoa: number;

    @IsString()
    @IsOptional()
    desde: string;

    @IsString()
    observacao: string;
}