import { Controller, Get, Param } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { Cidade } from './entities/cidade.entity';

@Controller('cidade')
export class CidadeController {
  constructor(private readonly cidadeService: CidadeService) {}

  @Get('/:idPais')
  async findAllByIdPais(@Param('idPais') idPais: number): Promise<Cidade[]> {
    return this.cidadeService.findAllByIdPais(idPais);
  }
}
