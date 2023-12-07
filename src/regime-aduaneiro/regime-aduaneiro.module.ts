import { Module } from '@nestjs/common';
import { RegimeAduaneiroService } from './regime-aduaneiro.service';
import { RegimeAduaneiroController } from './regime-aduaneiro.controller';
import { RegimeAduaneiro } from './entities/regime-aduaneiro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RegimeAduaneiro])],
  controllers: [RegimeAduaneiroController],
  providers: [RegimeAduaneiroService],
})
export class RegimeAduaneiroModule {}
