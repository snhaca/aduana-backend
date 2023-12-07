import { Controller, Get } from '@nestjs/common';
import { TransporteService } from './transporte.service';
import { Transporte } from './entities/transporte.entity';

@Controller('transporte')
export class TransporteController {
  constructor(private readonly transporteService: TransporteService) {}

  @Get()
  async findAll(): Promise<Transporte[]> {
    return this.transporteService.findAll();
  }
}
