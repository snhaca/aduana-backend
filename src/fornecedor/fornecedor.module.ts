import { Module } from '@nestjs/common';
import { FornecedorController } from './fornecedor.controller';
import { FornecedorService } from './fornecedor.service';
import { Fornecedor } from './entities/fornecedor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaModule } from 'src/pessoa/pessoa.module';

@Module({
  imports: [TypeOrmModule.forFeature([Fornecedor]), PessoaModule],
  controllers: [FornecedorController],
  providers: [FornecedorService],
})
export class FornecedorModule {}
