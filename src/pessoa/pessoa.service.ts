import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const pessoa = await this.findByEmail(create.email).catch(() => undefined);

    if (pessoa) {
      throw new BadGatewayException('email já existe no sistema');
    }

    return this.pessoaRepository.save({
      ...create,
    });
  }

  async findAll(): Promise<Pessoa[]> {
    return this.pessoaRepository.find();
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

  async findOneUsingRelations(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
      },
      relations: {
        colaborador: true,
        cliente: true,
        exportador: true,
        importador: true,
        fornecedor: true,
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

  async findPessoaColaborador(id: number): Promise<Pessoa> {
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

  async findAllPessoaColaborador(): Promise<Pessoa[]> {
    const pessoa = await this.pessoaRepository.find({
      where: {
        ehColaborador: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Dados não encontrados`);
    }

    return pessoa;
  }

  async findPessoaColaboradorUsingRelations(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehColaborador: 'S',
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

  async findPessoaCliente(id: number): Promise<Pessoa> {
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

  async findAllPessoaCliente(): Promise<Pessoa[]> {
    const pessoa = await this.pessoaRepository.find({
      where: {
        ehCliente: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Dados não encontrados`);
    }

    return pessoa;
  }

  async findPessoaClienteUsingRelations(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehCliente: 'S',
      },
      relations: {
        cliente: true,
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

  async findPessoaExportador(id: number): Promise<Pessoa> {
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

  async findAllPessoaExportador(): Promise<Pessoa[]> {
    const pessoa = await this.pessoaRepository.find({
      where: {
        ehExportador: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Dados não encontrados`);
    }

    return pessoa;
  }

  async findPessoaExportadorUsingRelations(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehExportador: 'S',
      },
      relations: {
        exportador: true,
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

  async findPessoaImportador(id: number): Promise<Pessoa> {
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

  async findAllPessoaImportador(): Promise<Pessoa[]> {
    const pessoa = await this.pessoaRepository.find({
      where: {
        ehImportador: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Dados não encontrados`);
    }

    return pessoa;
  }

  async findPessoaImportadorUsingRelations(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehImportador: 'S',
      },
      relations: {
        importador: true,
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

  async findPessoaFornecedor(id: number): Promise<Pessoa> {
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

  async findAllPessoaFornecedor(): Promise<Pessoa[]> {
    const pessoa = await this.pessoaRepository.find({
      where: {
        ehFornecedor: 'S',
      },
    });

    if (!pessoa) {
      throw new NotFoundException(`Dados não encontrados`);
    }

    return pessoa;
  }

  async findPessoaFornecedorUsingRelations(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne({
      where: {
        id,
        ehFornecedor: 'S',
      },
      relations: {
        fornecedor: true,
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
}
