import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const cliente = await this.findOne(create.idPessoa).catch(() => undefined);

    if (cliente) {
      throw new BadGatewayException('cliente já existe no sistema');
    }

    return this.exportadorRepository.save({ ...create });
  }

  async findOne(idPessoa: number): Promise<Exportador> {
    const exportador = await this.exportadorRepository.findOne({
      where: {
        idPessoa,
      },
    });

    if (!exportador) {
      throw new NotFoundException(`Id Exportador: ${idPessoa} Não encontrado`);
    }

    return exportador;
  }
}
