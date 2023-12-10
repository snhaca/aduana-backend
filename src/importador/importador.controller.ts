import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Importador } from './entities/importador.entity';
import { CreateImportador } from './dtos/create-importador.dto';
import { ImportadorService } from './importador.service';
import { ReturnPessoa } from 'src/pessoa/dtos/return-pessoa.dto';
import { PessoaService } from 'src/pessoa/pessoa.service';

@Controller('importador')
export class ImportadorController {
  constructor(
    private readonly importadorService: ImportadorService,
    private readonly pessoaService: PessoaService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateImportador): Promise<Importador> {
    return this.importadorService.create(create);
  }

  @Get('/:idPessoa')
  async findImportadorUsingRelations(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnPessoa> {
    return new ReturnPessoa(
      await this.pessoaService.findPessoaImportadorUsingRelations(idPessoa),
    );
  }

  @Get()
  async findAll(): Promise<ReturnPessoa[]> {
    return (await this.pessoaService.findAllPessoaImportador()).map(
      (pessoa) => new ReturnPessoa(pessoa),
    );
  }
}
