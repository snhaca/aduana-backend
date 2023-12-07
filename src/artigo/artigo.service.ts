import { Injectable } from '@nestjs/common';
import { Artigo } from './entities/artigo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArtigoService {
  constructor(
    @InjectRepository(Artigo)
    private readonly artigoRepository: Repository<Artigo>,
  ) {}

  async findAll(): Promise<Artigo[]> {
    return this.artigoRepository.find();
  }
}
