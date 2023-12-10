import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const fornecedor = await this.findOne(create.idPessoa).catch(
      () => undefined,
    );

    if (fornecedor) {
      throw new BadGatewayException('cliente já existe no sistema');
    }

    return this.fornecedorRepository.save({ ...create });
  }

  async findOne(idPessoa: number): Promise<Fornecedor> {
    const exportador = await this.fornecedorRepository.findOne({
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
