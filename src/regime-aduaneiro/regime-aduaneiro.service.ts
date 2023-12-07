import { Injectable } from '@nestjs/common';
import { RegimeAduaneiro } from './entities/regime-aduaneiro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RegimeAduaneiroService {
  constructor(
    @InjectRepository(RegimeAduaneiro)
    private readonly servicoRepository: Repository<RegimeAduaneiro>,
  ) {}

  async findAll(): Promise<RegimeAduaneiro[]> {
    return this.servicoRepository.find();
  }
}
