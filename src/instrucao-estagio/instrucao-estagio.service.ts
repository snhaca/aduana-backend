import { Injectable, NotFoundException } from '@nestjs/common';
import { InstrucaoEstagio } from './entities/instrucao-estagio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstrucaoEstagioService {
  constructor(
    @InjectRepository(InstrucaoEstagio)
    private readonly estagioRepository: Repository<InstrucaoEstagio>,
  ) {}

  async findAll(): Promise<InstrucaoEstagio[]> {
    const estagios = await this.estagioRepository.find();

    if (!estagios || estagios.length === 0) {
      throw new NotFoundException(`Sem dados para mostrar`);
    }

    return estagios;
  }
}
