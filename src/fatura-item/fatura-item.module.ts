import { Module } from '@nestjs/common';
import { FaturaItemController } from './fatura-item.controller';
import { FaturaItemService } from './fatura-item.service';

@Module({
  controllers: [FaturaItemController],
  providers: [FaturaItemService]
})
export class FaturaItemModule {}
