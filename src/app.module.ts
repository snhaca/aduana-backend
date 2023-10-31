import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CidadeModule } from './cidade/cidade.module';
import { PaisModule } from './pais/pais.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { ColaboradorContatoModule } from './colaborador_contato/colaborador_contato.module';
import { PessoaEnderecoModule } from './pessoa_endereco/pessoa_endereco.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from './cache/cache.module';

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
    ColaboradorContatoModule,
    PessoaEnderecoModule,
    CacheModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
