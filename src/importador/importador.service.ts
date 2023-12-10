import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const importador = await this.findOne(create.idPessoa).catch(
      () => undefined,
    );

    if (importador) {
      throw new BadGatewayException('cliente já existe no sistema');
    }

    return this.importadorRepository.save({ ...create });
  }

  async findOne(idPessoa: number): Promise<Importador> {
    const importador = await this.importadorRepository.findOne({
      where: {
        idPessoa,
      },
    });

    if (!importador) {
      throw new NotFoundException(`Id Cliente: ${idPessoa} Não encontrado`);
    }

    return importador;
  }
}
