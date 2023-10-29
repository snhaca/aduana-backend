import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsuarioDTO } from './dtos/create-usuario.dto';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async createUsuario(
    @Body() createUsuario: CreateUsuarioDTO,
  ): Promise<UsuarioEntity> {
    return this.usuarioService.createUsuario(createUsuario);
  }

  @Get()
  async buscarUsuarios(): Promise<UsuarioEntity[]> {
    return this.usuarioService.buscarUsuarios();
  }
}
