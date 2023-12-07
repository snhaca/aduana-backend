/* eslint-disable prettier/prettier */
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateImportador {
    @IsNumber()
    idPessoa: number;

    @IsDate()
    @IsOptional()
    desde: Date;

    @IsString()
    observacao: string;
}