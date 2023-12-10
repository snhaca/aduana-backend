import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePessoa } from './dtos/create-pessoa.dto';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './entities/pessoa.entity';
import { ReturnPessoa } from './dtos/return-pessoa.dto';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreatePessoa): Promise<Pessoa> {
    return this.pessoaService.create(create);
  }

  @Get()
  async findAll(): Promise<ReturnPessoa[]> {
    return (await this.pessoaService.findAll()).map(
      (pessoa) => new ReturnPessoa(pessoa),
    );
  }

  @Get('/:idPessoa')
  async findOneUsingRelations(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnPessoa> {
    return new ReturnPessoa(
      await this.pessoaService.findOneUsingRelations(idPessoa),
    );
  }

  @Get('/cliente/:idPessoa')
  async findClienteUsingRelations(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnPessoa> {
    return new ReturnPessoa(
      await this.pessoaService.findPessoaClienteUsingRelations(idPessoa),
    );
  }
}
