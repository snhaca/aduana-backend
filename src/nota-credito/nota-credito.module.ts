import { Module } from '@nestjs/common';
import { NotaCreditoController } from './nota-credito.controller';
import { NotaCreditoService } from './nota-credito.service';
import { Credito } from './entities/credito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Credito])],
  controllers: [NotaCreditoController],
  providers: [NotaCreditoService],
})
export class NotaCreditoModule {}
