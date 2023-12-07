import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pais } from './entities/pais.entity';

@Injectable()
export class PaisService {
  constructor(
    @InjectRepository(Pais)
    private readonly paisRepository: Repository<Pais>,
  ) {}

  async findAll(): Promise<Pais[]> {
    return this.paisRepository.find();
  }
}
