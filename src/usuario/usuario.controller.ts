import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUsuarioDTO } from './dtos/create-usuario.dto';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './entities/usuario.entity';
import { ReturnUsuarioDTO } from './dtos/return-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUsuario(
    @Body() createUsuario: CreateUsuarioDTO,
  ): Promise<UsuarioEntity> {
    return this.usuarioService.createUsuario(createUsuario);
  }

  @Get()
  async buscarUsuarios(): Promise<ReturnUsuarioDTO[]> {
    return (await this.usuarioService.buscarUsuarios()).map(
      (usuarioEntity) => new ReturnUsuarioDTO(usuarioEntity),
    );
  }
}
