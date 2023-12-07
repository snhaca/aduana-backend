import { Injectable, NotFoundException } from '@nestjs/common';
import { InstrucaoDocRecebido } from './entities/instrucao-doc-recebido.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstrucaoDocRecebido } from './dto/create-instrucao-doc-recebido.dto';
import { InstrucaoService } from 'src/instrucao/instrucao.service';

@Injectable()
export class InstrucaoDocRecebidoService {
  constructor(
    @InjectRepository(InstrucaoDocRecebido)
    private readonly docRecebidoRepository: Repository<InstrucaoDocRecebido>,
    private readonly instrucaoService: InstrucaoService,
  ) {}

  async create(
    create: CreateInstrucaoDocRecebido,
  ): Promise<InstrucaoDocRecebido> {
    await this.instrucaoService.findOne(create.idInstrucao);

    return this.docRecebidoRepository.save({
      ...create,
    });
  }

  async findAll(): Promise<InstrucaoDocRecebido[]> {
    const docs = await this.docRecebidoRepository.find();

    if (!docs || docs.length === 0) {
      throw new NotFoundException(`Sem dados para mostrar`);
    }

    return docs;
  }
}
