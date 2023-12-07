import { Module } from '@nestjs/common';
import { NotaCreditoItemController } from './nota-credito-item.controller';
import { NotaCreditoItemService } from './nota-credito-item.service';
import { CreditoItem } from './entities/credito-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CreditoItem])],
  controllers: [NotaCreditoItemController],
  providers: [NotaCreditoItemService],
})
export class NotaCreditoItemModule {}
