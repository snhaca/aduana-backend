/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class UpdateSenhaDTO {
  @IsString()
  novaSenha: string;

  @IsString()
  ultimaSenha: string;
}