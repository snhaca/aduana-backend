import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './entities/usuario.entity';
import { ReturnUsuario } from './dtos/return-usuario.dto';
import { CreateUsuario } from './dtos/create-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUsuario(
    @Body() createUsuario: CreateUsuario,
  ): Promise<UsuarioEntity> {
    return this.usuarioService.createUsuario(createUsuario);
  }

  @Get()
  async findUsuarios(): Promise<ReturnUsuario[]> {
    return (await this.usuarioService.findUsuarios()).map(
      (usuarioEntity) => new ReturnUsuario(usuarioEntity),
    );
  }
}
