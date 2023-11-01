import { Injectable, NotFoundException } from '@nestjs/common';
import { PessoaEntity } from './entities/pessoa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoaDTO } from './dtos/create-pessoa.dto';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(PessoaEntity)
    private readonly pessoaRepository: Repository<PessoaEntity>,
  ) {}

  async createPessoa(createPessoaDTO: CreatePessoaDTO): Promise<PessoaEntity> {
    return this.pessoaRepository.save({
      ...createPessoaDTO,
    });
  }

  async findPessoas(): Promise<PessoaEntity[]> {
    return this.pessoaRepository.find();
  }

  async findPessoaById(idPessoa: number): Promise<PessoaEntity> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id: idPessoa,
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Id Pessoa: ${idPessoa} Not Found`);
    }

    return pessoa;
  }
}
