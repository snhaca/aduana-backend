import { Injectable, NotFoundException } from '@nestjs/common';
import { Colaborador } from './entities/colaborador.entity';
import { CreateColaborador } from './dtos/create-colaborador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private readonly colaboradorRepository: Repository<Colaborador>,
  ) {}

  async create(create: CreateColaborador): Promise<Colaborador> {
    return this.colaboradorRepository.save({
      ...create,
    });
  }

  async findAll(): Promise<Colaborador[]> {
    return this.colaboradorRepository.find();
  }

  async findByIdPessoaUsingRelations(idPessoa: number): Promise<Colaborador> {
    const colaborador = await this.colaboradorRepository.findOne({
      where: {
        idPessoa,
      },
      relations: {
        pessoa: {
          colaborador: true,
          pContatos: true,
          pTelefones: true,
          pEnderecos: {
            cidade: {
              pais: true,
            },
          },
        },
      },
    });

    if (!colaborador) {
      throw new NotFoundException(`Id Colaborador: ${idPessoa} não encontrado`);
    }

    return colaborador;
  }

  async findOne(id: number): Promise<Colaborador> {
    const colaborador = await this.colaboradorRepository.findOne({
      where: {
        id,
      },
    });

    if (!colaborador) {
      throw new NotFoundException(`Id Colaborador: ${id} não encontrado`);
    }

    return colaborador;
  }
}
