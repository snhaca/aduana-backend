import { Injectable, NotFoundException } from '@nestjs/common';
import { InstrucaoDoc } from './entities/instrucao-doc.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstrucaoDocService {
  constructor(
    @InjectRepository(InstrucaoDoc)
    private readonly documentoRepository: Repository<InstrucaoDoc>,
  ) {}

  async findAll(): Promise<InstrucaoDoc[]> {
    const docs = await this.documentoRepository.find();

    if (!docs || docs.length === 0) {
      throw new NotFoundException(`Sem dados para mostrar`);
    }

    return docs;
  }
}
