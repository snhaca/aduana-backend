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
import { ReturnImportador } from './dtos/return-importador.dto';

@Controller('importador')
export class ImportadorController {
  constructor(private readonly importadorService: ImportadorService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createImportador(
    @Body() create: CreateImportador,
  ): Promise<Importador> {
    return this.importadorService.create(create);
  }

  @Get('/:idPessoa')
  async findByIdPessoa(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnImportador> {
    return new ReturnImportador(
      await this.importadorService.findByIdPessoa(idPessoa),
    );
  }
}
