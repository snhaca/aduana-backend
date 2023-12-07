import { Module } from '@nestjs/common';
import { EmpresaContatoController } from './empresa_contato.controller';
import { EmpresaContato } from './entities/empresa-contato.entity';
import { EmpresaModule } from 'src/empresa/empresa.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaContatoService } from './empresa_contato.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresaContato]), EmpresaModule],
  controllers: [EmpresaContatoController],
  providers: [EmpresaContatoService],
})
export class EmpresaContatoModule {}
