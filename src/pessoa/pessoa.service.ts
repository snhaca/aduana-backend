import { Injectable, NotFoundException } from '@nestjs/common';
import { Pessoa } from './entities/pessoa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoa } from './dtos/create-pessoa.dto';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  async create(create: CreatePessoa): Promise<Pessoa> {
    return this.pessoaRepository.save({
      ...create,
    });
  }

  async findAll(): Promise<Pessoa[]> {
    return this.pessoaRepository.find();
  }

  async findOneUsingRelations(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
      },
      relations: {
        colaborador: true,
        pEnderecos: {
          cidade: {
            pais: true,
          },
        },
        pContatos: true,
        pTelefones: true,
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Id Pessoa: ${id} não encontrado`);
    }

    return pessoa;
  }

  async findOne(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Id Pessoa: ${id} não encontrado`);
    }

    return pessoa;
  }

  async findByEmail(email: string): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        email,
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Email: ${email} Não encontrado`);
    }

    return pessoa;
  }

  async findColaboradorByIdPessoa(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehColaborador: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Id Pessoa: ${id} não encontrado`);
    }

    return pessoa;
  }

  async findClienteByIdPessoa(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehCliente: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Id Pessoa: ${id} não encontrado`);
    }

    return pessoa;
  }

  async findExportadorByIdPessoa(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehExportador: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Id Pessoa: ${id} não encontrado`);
    }

    return pessoa;
  }

  async findImportadorByIdPessoa(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehImportador: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Id Pessoa: ${id} não encontrado`);
    }

    return pessoa;
  }

  async findFornecedorByIdPessoa(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehFornecedor: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Id Pessoa: ${id} não encontrado`);
    }

    return pessoa;
  }
}
