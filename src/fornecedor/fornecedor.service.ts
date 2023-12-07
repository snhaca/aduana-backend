import { Injectable, NotFoundException } from '@nestjs/common';
import { Fornecedor } from './entities/fornecedor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { Repository } from 'typeorm';
import { CreateFornecedor } from './dtos/create-fornecedor.dto';

@Injectable()
export class FornecedorService {
  constructor(
    @InjectRepository(Fornecedor)
    private readonly fornecedorRepository: Repository<Fornecedor>,
    private readonly pessoaService: PessoaService,
  ) {}

  async create(create: CreateFornecedor): Promise<Fornecedor> {
    await this.pessoaService.findOne(create.idPessoa);

    return this.fornecedorRepository.save({ ...create });
  }

  async findByIdPessoa(idPessoa: number): Promise<Fornecedor> {
    const fornecedor = await this.fornecedorRepository.findOne({
      where: {
        idPessoa,
      },
      relations: {
        pessoa: {
          pEnderecos: {
            cidade: {
              pais: true,
            },
          },
          pContatos: true,
          pTelefones: true,
        },
      },
    });

    if (!fornecedor) {
      throw new NotFoundException(`Fornecedor: ${idPessoa} não encontrado`);
    }

    return fornecedor;
  }
}
