import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ColaboradorService } from './colaborador.service';
import { CreateColaborador } from './dtos/create-colaborador.dto';
import { ReturnColaborador } from './dtos/return-colaborador.dto';
import { Colaborador } from './entities/colaborador.entity';

@Controller('colaborador')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateColaborador): Promise<Colaborador> {
    return this.colaboradorService.create(create);
  }

  @Get()
  async findAll(): Promise<ReturnColaborador[]> {
    return (await this.colaboradorService.findAll()).map(
      (colaboradorEntity) => new ReturnColaborador(colaboradorEntity),
    );
  }

  @Get('/:idPessoa')
  async findByIdUsingRelations(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnColaborador> {
    return new ReturnColaborador(
      await this.colaboradorService.findByIdPessoaUsingRelations(idPessoa),
    );
  }
}
