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
import { ReturnClienteDto } from './dtos/return-cliente.dto';

@Roles(TipoUsuario.Usuario, TipoUsuario.Admin)
@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateCliente): Promise<Cliente> {
    return this.clienteService.create(create);
  }

  @Get('/:idPessoa')
  async findByIdPessoaUsingRelations(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnClienteDto> {
    return new ReturnClienteDto(
      await this.clienteService.findByIdPessoaUsingRelations(idPessoa),
    );
  }
}
