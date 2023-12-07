import { Module } from '@nestjs/common';
import { NotaDebitoController } from './nota-debito.controller';
import { NotaDebitoService } from './nota-debito.service';
import { Debito } from './entities/debito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Debito])],
  controllers: [NotaDebitoController],
  providers: [NotaDebitoService],
})
export class NotaDebitoModule {}
