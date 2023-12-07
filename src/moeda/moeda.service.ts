import { Injectable } from '@nestjs/common';
import { Moeda } from './entities/moeda.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoedaService {
  constructor(
    @InjectRepository(Moeda)
    private readonly moedaRepository: Repository<Moeda>,
  ) {}

  async findAll(): Promise<Moeda[]> {
    return this.moedaRepository.find();
  }
}
