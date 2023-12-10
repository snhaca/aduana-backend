/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class UpdateDebitoItemDto {
  @IsNumber()
  quantidade: number;

  @IsNumber()
  valorUnitario: number;

  @IsNumber()
  valorTotal: number;

  @IsNumber()
  taxaIva: number;
 
  @IsString()
  usuarioAtualiza: string;

  @IsNumber()
  idFatura: number;

  @IsNumber()
  idArtigo: number;
}
