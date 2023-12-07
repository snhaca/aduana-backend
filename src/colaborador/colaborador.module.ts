import { Module } from '@nestjs/common';
import { ColaboradorController } from './colaborador.controller';
import { ColaboradorService } from './colaborador.service';
import { Colaborador } from './entities/colaborador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from 'src/pessoa/pessoa.module';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador]), PessoaModule],
  controllers: [ColaboradorController],
  providers: [ColaboradorService],
  exports: [ColaboradorService],
})
export class ColaboradorModule {}
