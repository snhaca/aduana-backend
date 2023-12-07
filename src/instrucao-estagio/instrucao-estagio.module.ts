import { Module } from '@nestjs/common';
import { InstrucaoEstagioService } from './instrucao-estagio.service';
import { InstrucaoEstagioController } from './instrucao-estagio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrucaoEstagio } from './entities/instrucao-estagio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstrucaoEstagio])],
  controllers: [InstrucaoEstagioController],
  providers: [InstrucaoEstagioService],
  exports: [InstrucaoEstagioService],
})
export class InstrucaoEstagioModule {}
