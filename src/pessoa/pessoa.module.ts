import { Module } from '@nestjs/common';
import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaEntity } from './entities/pessoa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaEntity])],
  controllers: [PessoaController],
  providers: [PessoaService],
  exports: [PessoaService],
})
export class PessoaModule {}
