import { Module } from '@nestjs/common';
import { PaisController } from './pais.controller';
import { PaisService } from './pais.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pais])],
  controllers: [PaisController],
  providers: [PaisService],
})
export class PaisModule {}
