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
  constructor(private readonly pessoaoService: PessoaService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreatePessoa): Promise<Pessoa> {
    return this.pessoaoService.create(create);
  }

  @Get()
  async findAll(): Promise<ReturnPessoa[]> {
    return (await this.pessoaoService.findAll()).map(
      (pessoaoEntity) => new ReturnPessoa(pessoaoEntity),
    );
  }

  @Get('/:idPessoa')
  async findOneUsingRelations(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnPessoa> {
    return new ReturnPessoa(
      await this.pessoaoService.findOneUsingRelations(idPessoa),
    );
  }
}
