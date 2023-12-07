import { Module } from '@nestjs/common';
import { ProformaItemController } from './proforma-item.controller';
import { ProformaItemService } from './proforma-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProformaItem } from './entities/proforma-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProformaItem])],
  controllers: [ProformaItemController],
  providers: [ProformaItemService],
})
export class ProformaItemModule {}
