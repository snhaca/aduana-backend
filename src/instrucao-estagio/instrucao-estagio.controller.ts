import { Controller, Get } from '@nestjs/common';
import { InstrucaoEstagio } from './entities/instrucao-estagio.entity';
import { InstrucaoEstagioService } from './instrucao-estagio.service';

@Controller('instrucao-estagio')
export class InstrucaoEstagioController {
  constructor(private readonly estagioService: InstrucaoEstagioService) {}

  @Get()
  async findAll(): Promise<InstrucaoEstagio[]> {
    return this.estagioService.findAll();
  }
}
