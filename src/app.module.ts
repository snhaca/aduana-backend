import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CidadeModule } from './cidade/cidade.module';
import { PaisModule } from './pais/pais.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { ColaboradorContatoModule } from './colaborador_contato/colaborador_contato.module';
import { PessoaEnderecoModule } from './pessoa_endereco/pessoa_endereco.module';

@Module({
  imports: [
    UsuarioModule,
    PessoaModule,
    CidadeModule,
    PaisModule,
    ColaboradorModule,
    ColaboradorContatoModule,
    PessoaEnderecoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
