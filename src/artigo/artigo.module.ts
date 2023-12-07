import { Module } from '@nestjs/common';
import { ArtigoService } from './artigo.service';
import { ArtigoController } from './artigo.controller';
import { Artigo } from './entities/artigo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Artigo])],
  controllers: [ArtigoController],
  providers: [ArtigoService],
})
export class ArtigoModule {}
