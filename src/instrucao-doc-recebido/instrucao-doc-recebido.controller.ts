import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { InstrucaoDocRecebidoService } from './instrucao-doc-recebido.service';
import { InstrucaoDocRecebido } from './entities/instrucao-doc-recebido.entity';
import { CreateInstrucaoDocRecebido } from './dto/create-instrucao-doc-recebido.dto';

@Controller('instrucao-doc-recebido')
export class InstrucaoDocRecebidoController {
  constructor(
    private readonly docRecebidoService: InstrucaoDocRecebidoService,
  ) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(
    @Body() create: CreateInstrucaoDocRecebido,
  ): Promise<InstrucaoDocRecebido> {
    return this.docRecebidoService.create(create);
  }

  @Get()
  async findAll(): Promise<InstrucaoDocRecebido[]> {
    return this.docRecebidoService.findAll();
  }
}
