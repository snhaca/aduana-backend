import { Injectable } from '@nestjs/common';
import { Transporte } from './entities/transporte.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransporteService {
  constructor(
    @InjectRepository(Transporte)
    private readonly transporteRepository: Repository<Transporte>,
  ) {}

  async findAll(): Promise<Transporte[]> {
    return this.transporteRepository.find();
  }
}
