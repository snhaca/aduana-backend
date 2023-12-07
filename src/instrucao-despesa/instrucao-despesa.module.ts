import { Module } from '@nestjs/common';
import { InstrucaoDespesaService } from './instrucao-despesa.service';
import { InstrucaoDespesaController } from './instrucao-despesa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrucaoDespesa } from './entities/instrucao-despesa.entity';
import { InstrucaoModule } from 'src/instrucao/instrucao.module';

@Module({
  imports: [TypeOrmModule.forFeature([InstrucaoDespesa]), InstrucaoModule],
  controllers: [InstrucaoDespesaController],
  providers: [InstrucaoDespesaService],
})
export class InstrucaoDespesaModule {}
