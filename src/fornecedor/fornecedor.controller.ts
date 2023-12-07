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
import { ReturnFornecedor } from './dtos/return-fornecedor.dto';

@Controller('fornecedor')
export class FornecedorController {
  constructor(private readonly fornecedorService: FornecedorService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateFornecedor): Promise<Fornecedor> {
    return this.fornecedorService.create(create);
  }

  @Get('/:idPessoa')
  async findByIdPessoa(
    @Param('idPessoa') idPessoa: number,
  ): Promise<ReturnFornecedor> {
    return new ReturnFornecedor(
      await this.fornecedorService.findByIdPessoa(idPessoa),
    );
  }
}
