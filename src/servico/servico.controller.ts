import { Controller, Get } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { Servico } from './entities/servico.entity';

@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Get()
  async findAll(): Promise<Servico[]> {
    return this.servicoService.findAll();
  }
}
