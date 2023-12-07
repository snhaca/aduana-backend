import { Injectable, NotFoundException } from '@nestjs/common';
import { InstrucaoControlo } from './entities/instrucao-controlo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstrucaoControlo } from './dto/create-instrucao-controlo.dto';
import { InstrucaoService } from 'src/instrucao/instrucao.service';

@Injectable()
export class InstrucaoControloService {
  constructor(
    @InjectRepository(InstrucaoControlo)
    private readonly controloRepository: Repository<InstrucaoControlo>,
    private readonly instrucaoService: InstrucaoService,
  ) {}

  async create(create: CreateInstrucaoControlo): Promise<InstrucaoControlo> {
    await this.instrucaoService.findOne(create.idInstrucao);

    return this.controloRepository.save({
      ...create,
    });
  }

  async findOne(id: number): Promise<InstrucaoControlo> {
    const controlo = await this.controloRepository.findOne({
      where: {
        id,
      },
    });

    if (!controlo) {
      throw new NotFoundException(`Id Instrução: ${id} não encontrado`);
    }

    return controlo;
  }

  async findAll(): Promise<InstrucaoControlo[]> {
    const controlo = await this.controloRepository.find();

    if (!controlo || controlo.length === 0) {
      throw new NotFoundException(`Sem dados para mostrar`);
    }

    return controlo;
  }

  async delete(id: number) {
    const controlo = await this.findOne(id);

    if (!controlo || controlo === null) {
      throw new NotFoundException('Item não encontrado');
    } else {
      this.controloRepository.remove(controlo);
      return 'Removido com Sucesso';
    }
  }
}
