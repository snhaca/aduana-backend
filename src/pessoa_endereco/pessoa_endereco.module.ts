import { Module } from '@nestjs/common';
import { PessoaEnderecoController } from './pessoa_endereco.controller';
import { PessoaEnderecoService } from './pessoa_endereco.service';

@Module({
  controllers: [PessoaEnderecoController],
  providers: [PessoaEnderecoService]
})
export class PessoaEnderecoModule {}
