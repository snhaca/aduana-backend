import { Module } from '@nestjs/common';
import { ExportadorController } from './exportador.controller';
import { ExportadorService } from './exportador.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exportador } from './entities/exportador.entity';
import { PessoaModule } from 'src/pessoa/pessoa.module';

@Module({
  imports: [TypeOrmModule.forFeature([Exportador]), PessoaModule],
  controllers: [ExportadorController],
  providers: [ExportadorService],
})
export class ExportadorModule {}
