import { IsNumber, IsString } from 'class-validator';

export class CreateFaturaItemDto {
  @IsNumber()
  quantidade: number;

  @IsNumber()
  valorUnitario: number;

  @IsNumber()
  valorTotal: number;

  @IsNumber()
  taxaIva: number;

  @IsString()
  usuarioCadastro: string;

  @IsString()
  usuarioAtualiza: string;

  @IsNumber()
  idFatura: number;

  @IsNumber()
  idArtigo: number;
}
