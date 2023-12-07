import { Controller, Get } from '@nestjs/common';
import { Pais } from './entities/pais.entity';
import { PaisService } from './pais.service';

@Controller('pais')
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @Get()
  async findAll(): Promise<Pais[]> {
    return this.paisService.findAll();
  }
}
