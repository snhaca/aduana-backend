import { Injectable } from '@nestjs/common';
import { ClienteEntity } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteEntity)
    private readonly clienteRepository: Repository<ClienteEntity>,
    private readonly pessoaService: PessoaService,
  ) {}

  //   async createCliente(
  //     createCliente: CreateCliente,
  //     idPessoa: number,
  //   ): Promise<ClienteEntity> {
  //     await this.pessoaService.findPessoaById(idPessoa);

  //     return this.clienteRepository.save({
  //       ...createCliente,
  //     });
  //   }
}
