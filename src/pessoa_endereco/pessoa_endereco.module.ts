import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from 'src/pessoa/pessoa.module';
import { CidadeModule } from 'src/cidade/cidade.module';
import { PessoaEndereco } from './entities/pessoa_endereco.entity';
import { PessoaEnderecoController } from './pessoa_endereco.controller';
import { PessoaEnderecoService } from './pessoa_endereco.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PessoaEndereco]),
    PessoaModule,
    CidadeModule,
  ],
  controllers: [PessoaEnderecoController],
  providers: [PessoaEnderecoService],
})
export class PessoaEnderecoModule {}
