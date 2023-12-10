import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Fornecedor } from './entities/fornecedor.entity';
import { CreateFornecedor } from './dtos/create-fornecedor.dto';
import { FornecedorService } from './fornecedor.service';
import { ReturnPessoa } from 'src/pessoa/dtos/return-pessoa.dto';
import { PessoaService } from 'src/pessoa/pessoa.service';

@Controller('fornecedor')
export class FornecedorController {
  constructor(
    private readonly fornecedorService: FornecedorService,
    private readonly pessoaService: PessoaService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateFornecedor): Promise<Fornecedor> {
    return this.fornecedorService.create(create);
  }

  @Get('/:idPessoa')
  async findClienteUsingRelations(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnPessoa> {
    return new ReturnPessoa(
      await this.pessoaService.findPessoaExportadorUsingRelations(idPessoa),
    );
  }

  @Get()
  async findAll(): Promise<ReturnPessoa[]> {
    return (await this.pessoaService.findAllPessoaFornecedor()).map(
      (pessoa) => new ReturnPessoa(pessoa),
    );
  }
}
