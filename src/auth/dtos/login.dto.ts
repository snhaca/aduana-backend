/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class Login {
  @IsString()
  email: string;

  @IsString()
  senha: string;
}
