import { Module } from '@nestjs/common';
import { ColaboradorContatoController } from './colaborador_contato.controller';
import { ColaboradorContatoService } from './colaborador_contato.service';

@Module({
  controllers: [ColaboradorContatoController],
  providers: [ColaboradorContatoService]
})
export class ColaboradorContatoModule {}
