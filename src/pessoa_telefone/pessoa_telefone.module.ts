import { Module } from '@nestjs/common';
import { PessoaTelefoneController } from './pessoa_telefone.controller';
import { PessoaTelefoneService } from './pessoa_telefone.service';
import { PessoaTelefone } from './entities/pessoa-telefone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from 'src/pessoa/pessoa.module';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaTelefone]), PessoaModule],
  controllers: [PessoaTelefoneController],
  providers: [PessoaTelefoneService],
})
export class PessoaTelefoneModule {}
