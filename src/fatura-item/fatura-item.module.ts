import { Module } from '@nestjs/common';
import { FaturaItemController } from './fatura-item.controller';
import { FaturaItemService } from './fatura-item.service';
import { FaturaItem } from './entities/fatura-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaturaModule } from 'src/fatura/fatura.module';

@Module({
  imports: [TypeOrmModule.forFeature([FaturaItem]), FaturaModule],
  controllers: [FaturaItemController],
  providers: [FaturaItemService],
})
export class FaturaItemModule {}
