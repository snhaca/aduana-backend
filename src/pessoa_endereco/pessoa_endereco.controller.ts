import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PessoaEndereco } from './entities/pessoa_endereco.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { TipoUsuario } from 'src/usuario/enum/tipo-usuario.enum';
import { PessoaEnderecoService } from './pessoa_endereco.service';
import { CreatePessoaEndereco } from './dtos/create-pessoa-endereco.dto';
import { ReturnPessoaEndereco } from './dtos/return-pessoa-endereco.dto';

@Roles(TipoUsuario.Usuario, TipoUsuario.Admin, TipoUsuario.Root)
@Controller('pessoa-endereco')
export class PessoaEnderecoController {
  constructor(private readonly enderecoService: PessoaEnderecoService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreatePessoaEndereco): Promise<PessoaEndereco> {
    return this.enderecoService.create(create);
  }

  @Get('/:idPessoa')
  async findAllByIdPessoa(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnPessoaEndereco[]> {
    return (await this.enderecoService.findAllByIdPessoa(idPessoa)).map(
      (endereco) => new ReturnPessoaEndereco(endereco),
    );
  }
}
