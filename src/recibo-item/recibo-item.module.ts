import { Module } from '@nestjs/common';
import { ReciboItemController } from './recibo-item.controller';
import { ReciboItemService } from './recibo-item.service';

@Module({
  controllers: [ReciboItemController],
  providers: [ReciboItemService]
})
export class ReciboItemModule {}
