import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateCliente } from './dtos/create-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { TipoUsuario } from 'src/usuario/enum/tipo-usuario.enum';
import { ReturnPessoa } from 'src/pessoa/dtos/return-pessoa.dto';
import { PessoaService } from 'src/pessoa/pessoa.service';

@Roles(TipoUsuario.Usuario, TipoUsuario.Admin, TipoUsuario.Root)
@Controller('cliente')
export class ClienteController {
  constructor(
    private readonly clienteService: ClienteService,
    private readonly pessoaService: PessoaService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateCliente): Promise<Cliente> {
    return this.clienteService.create(create);
  }

  @Get('/:idPessoa')
  async findClienteUsingRelations(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnPessoa> {
    return new ReturnPessoa(
      await this.pessoaService.findPessoaClienteUsingRelations(idPessoa),
    );
  }

  @Get()
  async findAll(): Promise<ReturnPessoa[]> {
    return (await this.pessoaService.findAllPessoaCliente()).map(
      (pessoa) => new ReturnPessoa(pessoa),
    );
  }
}
