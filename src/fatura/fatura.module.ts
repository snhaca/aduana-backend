import { Module } from '@nestjs/common';
import { FaturaController } from './fatura.controller';
import { FaturaService } from './fatura.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fatura } from './entities/fatura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fatura])],
  controllers: [FaturaController],
  providers: [FaturaService],
})
export class FaturaModule {}
