import { Controller, Get, Param } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { CidadeEntity } from './entities/cidade.entity';

@Controller('cidade')
export class CidadeController {
  constructor(private readonly cidadeService: CidadeService) {}

  @Get('/:idPais')
  async findAllCidades(
    @Param('idPais') idPais: number,
  ): Promise<CidadeEntity[]> {
    return this.cidadeService.findAllCidadesByIdPais(idPais);
  }
}
