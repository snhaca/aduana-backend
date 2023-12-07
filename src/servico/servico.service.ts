import { Injectable } from '@nestjs/common';
import { Servico } from './entities/servico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  async findAll(): Promise<Servico[]> {
    return this.servicoRepository.find();
  }
}
