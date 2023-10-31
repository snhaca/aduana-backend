import { Controller, Get } from '@nestjs/common';
import { PaisEntity } from './entities/pais.entity';
import { PaisService } from './pais.service';

@Controller('pais')
export class PaisController {
  constructor(private readonly paisService: PaisService) {}

  @Get()
  async findAllPaises(): Promise<PaisEntity[]> {
    return this.paisService.findAllPaises();
  }
}
