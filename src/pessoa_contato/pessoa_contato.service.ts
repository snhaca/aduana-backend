import { Injectable } from '@nestjs/common';
import { PessoaContato } from './entities/pessoa-contato.entity';
import { CreatePessoaContato } from './dtos/create-pessoa-contato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { Repository } from 'typeorm';

@Injectable()
export class PessoaContatoService {
  constructor(
    @InjectRepository(PessoaContato)
    private readonly contatoRepository: Repository<PessoaContato>,
    private readonly pessoaService: PessoaService,
  ) {}

  async create(create: CreatePessoaContato): Promise<PessoaContato> {
    await this.pessoaService.findOne(create.idPessoa);

    return this.contatoRepository.save({
      ...create,
    });
  }
}
