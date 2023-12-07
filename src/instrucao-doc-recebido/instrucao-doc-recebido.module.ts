import { Module } from '@nestjs/common';
import { InstrucaoDocRecebidoService } from './instrucao-doc-recebido.service';
import { InstrucaoDocRecebidoController } from './instrucao-doc-recebido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrucaoDocRecebido } from './entities/instrucao-doc-recebido.entity';
import { InstrucaoModule } from 'src/instrucao/instrucao.module';

@Module({
  imports: [TypeOrmModule.forFeature([InstrucaoDocRecebido]), InstrucaoModule],
  controllers: [InstrucaoDocRecebidoController],
  providers: [InstrucaoDocRecebidoService],
})
export class InstrucaoDocRecebidoModule {}
