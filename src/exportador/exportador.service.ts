import { Injectable, NotFoundException } from '@nestjs/common';
import { Exportador } from './entities/exportador.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { Repository } from 'typeorm';
import { CreateExportador } from './dtos/cretate-exportador.dto';

@Injectable()
export class ExportadorService {
  constructor(
    @InjectRepository(Exportador)
    private readonly exportadorRepository: Repository<Exportador>,
    private readonly pessoaService: PessoaService,
  ) {}

  async create(create: CreateExportador): Promise<Exportador> {
    await this.pessoaService.findExportadorByIdPessoa(create.idPessoa);

    return this.exportadorRepository.save({ ...create });
  }

  async findByPessoaId(idPessoa: number): Promise<Exportador> {
    const exportador = await this.exportadorRepository.findOne({
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

    if (!exportador) {
      throw new NotFoundException(`Exportador: ${idPessoa} não encontrado`);
    }

    return exportador;
  }
}
