import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { Repository } from 'typeorm';
import { CreateImportador } from './dtos/create-importador.dto';
import { Importador } from './entities/importador.entity';

@Injectable()
export class ImportadorService {
  constructor(
    @InjectRepository(Importador)
    private readonly importadorRepository: Repository<Importador>,
    private readonly pessoaService: PessoaService,
  ) {}

  async create(create: CreateImportador): Promise<Importador> {
    await this.pessoaService.findImportadorByIdPessoa(create.idPessoa);

    return this.importadorRepository.save({ ...create });
  }

  async findByIdPessoa(idPessoa: number): Promise<Importador> {
    const importador = await this.importadorRepository.findOne({
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

    if (!importador) {
      throw new NotFoundException(`Importador: ${idPessoa} não encontrado`);
    }

    return importador;
  }
}
