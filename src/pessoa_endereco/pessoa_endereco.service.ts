import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaEndereco } from './entities/pessoa_endereco.entity';
import { Repository } from 'typeorm';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { CidadeService } from 'src/cidade/cidade.service';
import { CreatePessoaEndereco } from './dtos/create-pessoa-endereco.dto';

@Injectable()
export class PessoaEnderecoService {
  constructor(
    @InjectRepository(PessoaEndereco)
    private readonly enderecoRepository: Repository<PessoaEndereco>,
    private readonly pessoaService: PessoaService,
    private readonly cidadeService: CidadeService,
  ) {}

  async create(create: CreatePessoaEndereco): Promise<PessoaEndereco> {
    await this.pessoaService.findOne(create.idPessoa);
    await this.cidadeService.findOne(create.idCidade);

    return this.enderecoRepository.save({
      ...create,
    });
  }

  async findAllByIdPessoa(idPessoa: number): Promise<PessoaEndereco[]> {
    const enderecos = await this.enderecoRepository.find({
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
        },
      },
    });

    if (!enderecos || enderecos.length === 0) {
      throw new NotFoundException(
        `Endereço não encontrado para o Id Pessoa: ${idPessoa}`,
      );
    }

    return enderecos;
  }
}
