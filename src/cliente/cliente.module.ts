import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { PessoaModule } from 'src/pessoa/pessoa.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), PessoaModule],
  providers: [ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}
