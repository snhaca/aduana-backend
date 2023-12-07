import { Module } from '@nestjs/common';
import { ImportadorController } from './importador.controller';
import { ImportadorService } from './importador.service';
import { Importador } from './entities/importador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from 'src/pessoa/pessoa.module';

@Module({
  imports: [TypeOrmModule.forFeature([Importador]), PessoaModule],
  controllers: [ImportadorController],
  providers: [ImportadorService],
})
export class ImportadorModule {}
