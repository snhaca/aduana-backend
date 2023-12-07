import { Module } from '@nestjs/common';
import { EmpresaTelefone } from './entities/empresa-telefone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaTelefoneController } from './empresa_telefone.controller';
import { EmpresaTelefoneService } from './empresa_telefone.service';
import { EmpresaModule } from 'src/empresa/empresa.module';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresaTelefone]), EmpresaModule],
  controllers: [EmpresaTelefoneController],
  providers: [EmpresaTelefoneService],
})
export class EmpresaTelefoneModule {}
