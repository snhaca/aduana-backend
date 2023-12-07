import { Module } from '@nestjs/common';
import { PessoaContato } from './entities/pessoa-contato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from 'src/pessoa/pessoa.module';
import { PessoaContatoController } from './pessoa_contato.controller';
import { PessoaContatoService } from './pessoa_contato.service';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaContato]), PessoaModule],
  controllers: [PessoaContatoController],
  providers: [PessoaContatoService],
})
export class PessoaContatoModule {}
