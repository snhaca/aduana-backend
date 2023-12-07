import { Module } from '@nestjs/common';
import { ProformaController } from './proforma.controller';
import { ProformaService } from './proforma.service';
import { Proforma } from './entities/proforma.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Proforma])],
  controllers: [ProformaController],
  providers: [ProformaService],
})
export class ProformaModule {}
