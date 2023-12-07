import { Module } from '@nestjs/common';
import { NotaDebitoItemController } from './nota-debito-item.controller';
import { NotaDebitoItemService } from './nota-debito-item.service';
import { DebitoItem } from './entities/debito-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DebitoItem])],
  controllers: [NotaDebitoItemController],
  providers: [NotaDebitoItemService],
})
export class NotaDebitoItemModule {}
