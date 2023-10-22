import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsuarioDTO } from './dtos/create-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  @Post()
  async createUsuario(@Body() createUsuario: CreateUsuarioDTO) {
    return {
      ...createUsuario,
      senha: undefined,
    };
  }
}
