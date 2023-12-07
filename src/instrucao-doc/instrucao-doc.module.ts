import { Module } from '@nestjs/common';
import { InstrucaoDocService } from './instrucao-doc.service';
import { InstrucaoDocController } from './instrucao-doc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstrucaoDoc } from './entities/instrucao-doc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstrucaoDoc])],
  controllers: [InstrucaoDocController],
  providers: [InstrucaoDocService],
})
export class InstrucaoDocModule {}
