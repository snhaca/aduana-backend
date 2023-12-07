import { Module } from '@nestjs/common';
import { ServicoService } from './servico.service';
import { ServicoController } from './servico.controller';
import { Servico } from './entities/servico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Servico])],
  controllers: [ServicoController],
  providers: [ServicoService],
})
export class ServicoModule {}
