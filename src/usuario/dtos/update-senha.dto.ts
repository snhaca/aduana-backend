import { IsString } from 'class-validator';

export class UpdateSenha {
  @IsString()
  novaSenha: string;

  @IsString()
  ultimaSenha: string;
}
