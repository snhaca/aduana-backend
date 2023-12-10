import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCliente } from './dtos/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(create: CreateCliente): Promise<Cliente> {
    const cliente = await this.findOne(create.idPessoa).catch(() => undefined);

    if (cliente) {
      throw new BadGatewayException('cliente já existe no sistema');
    }

    return this.clienteRepository.save({ ...create });
  }

  async findOne(idPessoa: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: {
        idPessoa,
      },
    });

    if (!cliente) {
      throw new NotFoundException(`Id Cliente: ${idPessoa} Não encontrado`);
    }

    return cliente;
  }
}
