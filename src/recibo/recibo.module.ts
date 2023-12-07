import { Module } from '@nestjs/common';
import { ReciboService } from './recibo.service';
import { ReciboController } from './recibo.controller';

@Module({
  providers: [ReciboService],
  controllers: [ReciboController]
})
export class ReciboModule {}
