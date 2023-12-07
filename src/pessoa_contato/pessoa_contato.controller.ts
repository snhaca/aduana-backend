import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PessoaContatoService } from './pessoa_contato.service';
import { CreatePessoaContato } from './dtos/create-pessoa-contato.dto';
import { PessoaContato } from './entities/pessoa-contato.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { TipoUsuario } from 'src/usuario/enum/tipo-usuario.enum';

@Roles(TipoUsuario.Usuario, TipoUsuario.Admin)
@Controller('pessoa-contato')
export class PessoaContatoController {
  constructor(private readonly contatoService: PessoaContatoService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreatePessoaContato): Promise<PessoaContato> {
    return this.contatoService.create(create);
  }
}
