import { Injectable, NotFoundException } from '@nestjs/common';
import { InstrucaoDespesa } from './entities/instrucao-despesa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstrucaoDespesa } from './dto/create-instrucao-despesa.dto';
import { InstrucaoService } from 'src/instrucao/instrucao.service';

@Injectable()
export class InstrucaoDespesaService {
  constructor(
    @InjectRepository(InstrucaoDespesa)
    private readonly controloRepository: Repository<InstrucaoDespesa>,
    private readonly instrucaoService: InstrucaoService,
  ) {}

  async create(create: CreateInstrucaoDespesa): Promise<InstrucaoDespesa> {
    await this.instrucaoService.findOne(create.idInstrucao);

    return this.controloRepository.save({
      ...create,
    });
  }

  async findAll(): Promise<InstrucaoDespesa[]> {
    const despesas = await this.controloRepository.find();

    if (!despesas || despesas.length === 0) {
      throw new NotFoundException(`Sem dados para mostrar`);
    }

    return despesas;
  }
}
