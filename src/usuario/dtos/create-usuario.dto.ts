import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUsuario {
  @ApiProperty({ example: 'Sergio', description: 'Needed name' })
  @IsString()
  nome: string;

  @ApiProperty({ example: 'E-mail', description: 'Needed email' })
  @IsString()
  email: string;

  @ApiProperty({ example: 'Password', description: 'Needed password' })
  @IsString()
  senha: string;
}
