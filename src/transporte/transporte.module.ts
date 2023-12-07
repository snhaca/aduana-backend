import { Module } from '@nestjs/common';
import { TransporteService } from './transporte.service';
import { TransporteController } from './transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transporte } from './entities/transporte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transporte])],
  controllers: [TransporteController],
  providers: [TransporteService],
})
export class TransporteModule {}
