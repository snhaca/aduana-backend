import { Module } from '@nestjs/common';
import { EmpresaEnderecoService } from './empresa_endereco.service';
import { EmpresaEnderecoController } from './empresa_endereco.controller';
import { EmpresaEndereco } from './entities/empresa-endereco.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaModule } from 'src/empresa/empresa.module';
import { CidadeModule } from 'src/cidade/cidade.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmpresaEndereco]),
    EmpresaModule,
    CidadeModule,
  ],
  providers: [EmpresaEnderecoService],
  controllers: [EmpresaEnderecoController],
})
export class EmpresaEnderecoModule {}
