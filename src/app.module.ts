import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CidadeModule } from './cidade/cidade.module';
import { PaisModule } from './pais/pais.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from './cache/cache.module';
import { ClienteModule } from './cliente/cliente.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { ImportadorModule } from './importador/importador.module';
import { ExportadorModule } from './exportador/exportador.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { EmpresaModule } from './empresa/empresa.module';
import { EmpresaContatoModule } from './empresa_contato/empresa_contato.module';
import { EmpresaTelefoneModule } from './empresa_telefone/empresa_telefone.module';
import { PessoaTelefoneModule } from './pessoa_telefone/pessoa_telefone.module';
import { PessoaContatoModule } from './pessoa_contato/pessoa_contato.module';
import { EmpresaEnderecoModule } from './empresa_endereco/empresa_endereco.module';
import { EstadoCivilModule } from './estado-civil/estado-civil.module';
import { NivelFormacaoModule } from './nivel-formacao/nivel-formacao.module';
import { SetorModule } from './setor/setor.module';
import { PessoaEnderecoModule } from './pessoa_endereco/pessoa_endereco.module';
import { MoedaModule } from './moeda/moeda.module';
import { TransporteModule } from './transporte/transporte.module';
import { ServicoModule } from './servico/servico.module';
import { RegimeAduaneiroModule } from './regime-aduaneiro/regime-aduaneiro.module';
import { TerminalModule } from './terminal/terminal.module';
import { InstrucaoModule } from './instrucao/instrucao.module';
import { ArtigoModule } from './artigo/artigo.module';
import { InstrucaoDocModule } from './instrucao-doc/instrucao-doc.module';
import { InstrucaoEstagioModule } from './instrucao-estagio/instrucao-estagio.module';
import { InstrucaoControloModule } from './instrucao-controlo/instrucao-controlo.module';
import { InstrucaoDocRecebidoModule } from './instrucao-doc-recebido/instrucao-doc-recebido.module';
import { InstrucaoDespesaModule } from './instrucao-despesa/instrucao-despesa.module';
import { ProformaModule } from './proforma/proforma.module';
import { FaturaModule } from './fatura/fatura.module';
import { ReciboModule } from './recibo/recibo.module';
import { ReciboItemModule } from './recibo-item/recibo-item.module';
import { FaturaItemModule } from './fatura-item/fatura-item.module';
import { ProformaItemModule } from './proforma-item/proforma-item.module';
import { NotaDebitoModule } from './nota-debito/nota-debito.module';
import { NotaCreditoModule } from './nota-credito/nota-credito.module';
import { NotaDebitoItemModule } from './nota-debito-item/nota-debito-item.module';
import { NotaCreditoItemModule } from './nota-credito-item/nota-credito-item.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UsuarioModule,
    PessoaModule,
    CidadeModule,
    PaisModule,
    ColaboradorModule,
    CacheModule,
    ClienteModule,
    AuthModule,
    JwtModule,
    ImportadorModule,
    ExportadorModule,
    FornecedorModule,
    EmpresaModule,
    EmpresaContatoModule,
    EmpresaEnderecoModule,
    EmpresaTelefoneModule,
    PessoaTelefoneModule,
    PessoaContatoModule,
    PessoaEnderecoModule,
    EstadoCivilModule,
    SetorModule,
    NivelFormacaoModule,
    MoedaModule,
    TransporteModule,
    ServicoModule,
    RegimeAduaneiroModule,
    TerminalModule,
    InstrucaoModule,
    ArtigoModule,
    InstrucaoDocModule,
    InstrucaoEstagioModule,
    InstrucaoControloModule,
    InstrucaoDocRecebidoModule,
    InstrucaoDespesaModule,
    ProformaModule,
    FaturaModule,
    ReciboModule,
    ReciboItemModule,
    FaturaItemModule,
    ProformaItemModule,
    NotaDebitoModule,
    NotaCreditoModule,
    NotaDebitoItemModule,
    NotaCreditoItemModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
