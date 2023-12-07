import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { TipoUsuario } from 'src/usuario/enum/tipo-usuario.enum';
import { PessoaTelefone } from './entities/pessoa-telefone.entity';
import { CreatePessoaTelefone } from './dtos/create-pessoa-telefone.dto';
import { PessoaTelefoneService } from './pessoa_telefone.service';

@Roles(TipoUsuario.Usuario, TipoUsuario.Admin)
@Controller('pessoa-telefone')
export class PessoaTelefoneController {
  constructor(private readonly telefoneService: PessoaTelefoneService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreatePessoaTelefone): Promise<PessoaTelefone> {
    return this.telefoneService.create(create);
  }
}
