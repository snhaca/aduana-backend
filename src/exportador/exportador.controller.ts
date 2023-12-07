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
import { ReturnExportador } from './dtos/return-exportador.dto';

@Controller('exportador')
export class ExportadorController {
  constructor(private readonly exportadorService: ExportadorService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateExportador): Promise<Exportador> {
    return this.exportadorService.create(create);
  }

  @Get('/:idPessoa')
  async findByPessoaId(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnExportador> {
    return new ReturnExportador(
      await this.exportadorService.findByPessoaId(idPessoa),
    );
  }
}
