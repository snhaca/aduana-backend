import { Module } from '@nestjs/common';
import { InstrucaoControloService } from './instrucao-controlo.service';
import { InstrucaoControloController } from './instrucao-controlo.controller';
import { InstrucaoControlo } from './entities/instrucao-controlo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrucaoModule } from 'src/instrucao/instrucao.module';

@Module({
  imports: [TypeOrmModule.forFeature([InstrucaoControlo]), InstrucaoModule],
  controllers: [InstrucaoControloController],
  providers: [InstrucaoControloService],
  exports: [InstrucaoControloService],
})
export class InstrucaoControloModule {}
