import { Injectable, NotFoundException } from '@nestjs/common';
import { Empresa } from './entities/empresa.entity';
import { CreateEmpresa } from './dtos/create-empresa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  async create(create: CreateEmpresa): Promise<Empresa> {
    return this.empresaRepository.save({
      ...create,
    });
  }

  async findAll(): Promise<Empresa[]> {
    const empresas = await this.empresaRepository.find();

    if (!empresas || empresas.length === 0) {
      throw new NotFoundException('Sem dados para mostrar');
    }

    return empresas;
  }

  async findOne(id: number): Promise<Empresa> {
    const empresa = await this.empresaRepository.findOne({
      where: {
        id,
      },
    });

    if (!empresa) {
      throw new NotFoundException(`Id Empresa: ${id} não encontrado`);
    }

    return empresa;
  }

  async findByIdUsingRelations(id: number): Promise<Empresa> {
    const empresa = await this.empresaRepository.findOne({
      where: {
        id,
      },
      relations: {
        enderecos: {
          cidade: {
            pais: true,
          },
        },
        contatos: true,
        telefones: true,
      },
    });

    if (!empresa) {
      throw new NotFoundException(`Id Empresa: ${id} não encontrado`);
    }

    return empresa;
  }
}
