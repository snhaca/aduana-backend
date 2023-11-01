import { Module } from '@nestjs/common';
import { PessoaEnderecoController } from './pessoa_endereco.controller';
import { PessoaEnderecoService } from './pessoa_endereco.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaEnderecoEntity } from './entities/pessoa_endereco.entity';
import { PessoaModule } from 'src/pessoa/pessoa.module';
import { CidadeModule } from 'src/cidade/cidade.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PessoaEnderecoEntity]),
    PessoaModule,
    CidadeModule,
  ],
  controllers: [PessoaEnderecoController],
  providers: [PessoaEnderecoService],
})
export class PessoaEnderecoModule {}
