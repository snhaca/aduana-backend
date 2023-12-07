import { Module } from '@nestjs/common';
import { NivelFormacaoService } from './nivel-formacao.service';
import { NivelFormacaoController } from './nivel-formacao.controller';
import { NivelFormacao } from './entities/nivel-formacao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NivelFormacao])],
  controllers: [NivelFormacaoController],
  providers: [NivelFormacaoService],
})
export class NivelFormacaoModule {}
