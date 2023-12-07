import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { InstrucaoDespesaService } from './instrucao-despesa.service';
import { InstrucaoDespesa } from './entities/instrucao-despesa.entity';
import { CreateInstrucaoDespesa } from './dto/create-instrucao-despesa.dto';

@Controller('instrucao-despesa')
export class InstrucaoDespesaController {
  constructor(private readonly docRecebidoService: InstrucaoDespesaService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(
    @Body() create: CreateInstrucaoDespesa,
  ): Promise<InstrucaoDespesa> {
    return this.docRecebidoService.create(create);
  }

  @Get()
  async findAll(): Promise<InstrucaoDespesa[]> {
    return this.docRecebidoService.findAll();
  }
}
