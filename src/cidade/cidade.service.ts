import { Injectable, NotFoundException } from '@nestjs/common';
import { Cidade } from './entities/cidade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(Cidade)
    private readonly cidadeRepository: Repository<Cidade>,
    private readonly cacheService: CacheService,
  ) {}

  async findAllByIdPais(idPais: number): Promise<Cidade[]> {
    return this.cacheService.getCache<Cidade[]>(`pais_${idPais}`, () =>
      this.cidadeRepository.find({
        where: {
          idPais,
        },
      }),
    );
  }

  async findOne(id: number): Promise<Cidade> {
    const cidade = await this.cidadeRepository.findOne({
      where: {
        id,
      },
    });

    if (!cidade) {
      throw new NotFoundException(`Id Cidade: ${id} Não encontrado`);
    }

    return cidade;
  }
}
