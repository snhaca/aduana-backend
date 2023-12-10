import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateExportador } from './dtos/cretate-exportador.dto';
import { Exportador } from './entities/exportador.entity';
import { ExportadorService } from './exportador.service';
import { ReturnPessoa } from 'src/pessoa/dtos/return-pessoa.dto';
import { PessoaService } from 'src/pessoa/pessoa.service';

@Controller('exportador')
export class ExportadorController {
  constructor(
    private readonly exportadorService: ExportadorService,
    private readonly pessoaService: PessoaService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateExportador): Promise<Exportador> {
    return this.exportadorService.create(create);
  }

  @Get('/:idPessoa')
  async findExportadorUsingRelations(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnPessoa> {
    return new ReturnPessoa(
      await this.pessoaService.findPessoaExportadorUsingRelations(idPessoa),
    );
  }

  @Get()
  async findAll(): Promise<ReturnPessoa[]> {
    return (await this.pessoaService.findAllPessoaExportador()).map(
      (pessoa) => new ReturnPessoa(pessoa),
    );
  }
}
