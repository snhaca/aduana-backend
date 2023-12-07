import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresa } from './dtos/create-empresa.dto';
import { ReturnEmpresa } from './dtos/return-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateEmpresa): Promise<Empresa> {
    return this.empresaService.create(create);
  }

  @Get()
  async findAll(): Promise<ReturnEmpresa[]> {
    return (await this.empresaService.findAll()).map(
      (empresa) => new ReturnEmpresa(empresa),
    );
  }

  @Get('/:id')
  async findByIdUsingRelations(
    @Param('id') id: number,
  ): Promise<ReturnEmpresa> {
    return new ReturnEmpresa(
      await this.empresaService.findByIdUsingRelations(id),
    );
  }
}
