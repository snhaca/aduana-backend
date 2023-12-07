import { Injectable } from '@nestjs/common';
import { PessoaTelefone } from './entities/pessoa-telefone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { Repository } from 'typeorm';
import { CreatePessoaTelefone } from './dtos/create-pessoa-telefone.dto';

@Injectable()
export class PessoaTelefoneService {
  constructor(
    @InjectRepository(PessoaTelefone)
    private readonly telefoneRepository: Repository<PessoaTelefone>,
    private readonly pessoaService: PessoaService,
  ) {}

  async create(create: CreatePessoaTelefone): Promise<PessoaTelefone> {
    await this.pessoaService.findOne(create.idPessoa);

    return this.telefoneRepository.save({
      ...create,
    });
  }
}
