import { Injectable, NotFoundException } from '@nestjs/common';
import { Fatura } from './entities/fatura.entity';
import { CreateFaturaDto } from './dtos/create-fatura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateFaturaDto } from './dtos/update-fatura.dto';

@Injectable()
export class FaturaService {
  constructor(
    @InjectRepository(Fatura)
    private readonly faturaRepository: Repository<Fatura>,
  ) {}

  async create(create: CreateFaturaDto): Promise<Fatura> {
    const numero = (await this.faturaRepository.count()) + 1;

    const total =
      create.totalAlfandega + create.totalOEntidades + create.totalServico;
    // const data = new Date();
    // const ano = data.getFullYear();

    return this.faturaRepository.save({
      ...create,
      numero,
      total,
    });
  }

  async findAll(): Promise<Fatura[]> {
    const faturas = await this.faturaRepository.find();

    if (!faturas || faturas.length === 0) {
      throw new NotFoundException('Sem dados para mostrar');
    }

    return faturas;
  }

  async findOne(id: number): Promise<Fatura> {
    const fatura = await this.faturaRepository.findOne({
      where: {
        id,
      },
    });

    if (!fatura) {
      throw new NotFoundException(`Id Fatura: ${id} não encontrado`);
    }

    return fatura;
  }

  async findOneUsingRelations(id: number): Promise<Fatura> {
    const fatura = await this.faturaRepository.findOne({
      where: {
        id,
      },
      relations: {
        cliente: true,
        instrucao: true,
        faturaItems: true,
      },
    });

    if (!fatura) {
      throw new NotFoundException(`Id Fatura: ${id} não encontrado`);
    }

    return fatura;
  }

  async update(update: UpdateFaturaDto, id: number): Promise<Fatura> {
    const fatura = await this.findOne(id);

    return this.faturaRepository.save({
      ...fatura,
      ...update,
    });
  }
}
