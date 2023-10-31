import { Injectable } from '@nestjs/common';
import { CidadeEntity } from './entities/cidade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(CidadeEntity)
    private readonly cidadeRepository: Repository<CidadeEntity>,
    private readonly cacheService: CacheService,
  ) {}

  async findAllCidadesByPaisId(idPais: number): Promise<CidadeEntity[]> {
    return this.cacheService.getCache<CidadeEntity[]>(`pais_${idPais}`, () =>
      this.cidadeRepository.find({
        where: {
          idPais,
        },
      }),
    );
  }
}
