import { Controller, Get } from '@nestjs/common';
import { MoedaService } from './moeda.service';
import { Moeda } from './entities/moeda.entity';

@Controller('moeda')
export class MoedaController {
  constructor(private readonly moedaService: MoedaService) {}

  @Get()
  async findAll(): Promise<Moeda[]> {
    return this.moedaService.findAll();
  }
}
