import { Controller, Get, Param } from '@nestjs/common';
import { NivelFormacaoService } from './nivel-formacao.service';

@Controller('nivel-formacao')
export class NivelFormacaoController {
  constructor(private readonly nivelFormacaoService: NivelFormacaoService) {}

  @Get()
  findAll() {
    return this.nivelFormacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nivelFormacaoService.findOne(+id);
  }
}
