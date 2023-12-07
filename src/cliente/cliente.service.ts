import { Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { Repository } from 'typeorm';
import { CreateCliente } from './dtos/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
    private readonly pessoaService: PessoaService,
  ) {}

  async create(create: CreateCliente): Promise<Cliente> {
    await this.pessoaService.findClienteByIdPessoa(create.idPessoa);

    return this.clienteRepository.save({ ...create });
  }

  async findByIdPessoaUsingRelations(idPessoa: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
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

    if (!cliente) {
      throw new NotFoundException(`Cliente: ${idPessoa} não encontrado`);
    }

    return cliente;
  }
}
