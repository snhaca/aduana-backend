import { Module } from '@nestjs/common';
import { CidadeController } from './cidade.controller';
import { CidadeService } from './cidade.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CidadeEntity } from './entities/cidade.entity';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [CacheModule, TypeOrmModule.forFeature([CidadeEntity])],
  controllers: [CidadeController],
  providers: [CidadeService],
  exports: [CidadeService],
})
export class CidadeModule {}
