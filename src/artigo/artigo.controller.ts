import { Controller, Get } from '@nestjs/common';
import { ArtigoService } from './artigo.service';
import { Artigo } from './entities/artigo.entity';

@Controller('artigo')
export class ArtigoController {
  constructor(private readonly artigoService: ArtigoService) {}

  @Get()
  async findAll(): Promise<Artigo[]> {
    return this.artigoService.findAll();
  }
}
