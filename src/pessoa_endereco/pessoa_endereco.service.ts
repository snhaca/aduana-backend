import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaEnderecoEntity } from './entities/pessoa_endereco.entity';
import { Repository } from 'typeorm';
import { CreatePessoaEnderecoDTO } from './dtos/create-pessoa-endereco.dto';
import { PessoaService } from 'src/pessoa/pessoa.service';
import { CidadeService } from 'src/cidade/cidade.service';

@Injectable()
export class PessoaEnderecoService {
  constructor(
    @InjectRepository(PessoaEnderecoEntity)
    private readonly enderecoRepository: Repository<PessoaEnderecoEntity>,
    private readonly pessoaService: PessoaService,
    private readonly cidadeService: CidadeService,
  ) {}

  async createPessoaEndereco(
    createPessoaEnderecoDTO: CreatePessoaEnderecoDTO,
    idPessoa: number,
  ): Promise<PessoaEnderecoEntity> {
    await this.pessoaService.findPessoaById(idPessoa);
    await this.cidadeService.findCidadeById(createPessoaEnderecoDTO.idCidade);

    return this.enderecoRepository.save({
      ...createPessoaEnderecoDTO,
      idPessoa,
    });
  }
}
