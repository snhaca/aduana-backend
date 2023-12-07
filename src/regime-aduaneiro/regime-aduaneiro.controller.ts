import { Controller, Get } from '@nestjs/common';
import { RegimeAduaneiroService } from './regime-aduaneiro.service';
import { RegimeAduaneiro } from './entities/regime-aduaneiro.entity';

@Controller('regime-aduaneiro')
export class RegimeAduaneiroController {
  constructor(private readonly regimeService: RegimeAduaneiroService) {}

  @Get()
  async findAll(): Promise<RegimeAduaneiro[]> {
    return this.regimeService.findAll();
  }
}
