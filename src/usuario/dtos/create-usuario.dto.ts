/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreateUsuarioDTO {
  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  nuit: string;

  @IsString()
  senha: string;
}
