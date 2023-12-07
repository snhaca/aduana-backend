import { Module } from '@nestjs/common';
import { MoedaService } from './moeda.service';
import { MoedaController } from './moeda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moeda } from './entities/moeda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Moeda])],
  controllers: [MoedaController],
  providers: [MoedaService],
})
export class MoedaModule {}
