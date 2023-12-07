import { Module } from '@nestjs/common';
import { InstrucaoService } from './instrucao.service';
import { InstrucaoController } from './instrucao.controller';
import { Instrucao } from './entities/instrucao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from 'src/cliente/cliente.module';

@Module({
  imports: [TypeOrmModule.forFeature([Instrucao]), ClienteModule],
  controllers: [InstrucaoController],
  providers: [InstrucaoService],
  exports: [InstrucaoService],
})
export class InstrucaoModule {}
