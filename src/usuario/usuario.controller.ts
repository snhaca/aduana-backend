import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { ReturnUsuario } from './dtos/return-usuario.dto';
import { CreateUsuario } from './dtos/create-usuario.dto';
import { UpdateSenha } from './dtos/update-senha.dto';
import { IdUsuario } from 'src/decorators/id-usuario.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { TipoUsuario } from './enum/tipo-usuario.enum';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateUsuario): Promise<Usuario> {
    return this.usuarioService.create(create);
  }

  @Roles(TipoUsuario.Admin)
  @Get('/all')
  async findAll(): Promise<ReturnUsuario[]> {
    return (await this.usuarioService.findAll()).map(
      (usuario) => new ReturnUsuario(usuario),
    );
  }

  @Roles(TipoUsuario.Admin)
  @Patch()
  @UsePipes(ValidationPipe)
  async updatePasswordUser(
    @Body() update: UpdateSenha,
    @IdUsuario() id: number,
  ): Promise<Usuario> {
    return this.usuarioService.updatePasswordUser(update, id);
  }

  @Roles(TipoUsuario.Admin, TipoUsuario.Usuario)
  @Get()
  async getInfoUser(@IdUsuario() id: number): Promise<ReturnUsuario> {
    return new ReturnUsuario(await this.usuarioService.findOne(id));
  }
}
