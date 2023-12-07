import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CidadeService } from 'src/cidade/cidade.service';
import { EmpresaService } from 'src/empresa/empresa.service';
import { Repository } from 'typeorm';
import { EmpresaEndereco } from './entities/empresa-endereco.entity';
import { CreateEmpresaEndereco } from './dtos/create-empresa-endereco.dto';

@Injectable()
export class EmpresaEnderecoService {
  constructor(
    @InjectRepository(EmpresaEndereco)
    private readonly enderecoRepository: Repository<EmpresaEndereco>,
    private readonly empresaService: EmpresaService,
    private readonly cidadeService: CidadeService,
  ) {}

  async create(create: CreateEmpresaEndereco): Promise<EmpresaEndereco> {
    await this.empresaService.findOne(create.idEmpresa);
    await this.cidadeService.findOne(create.idCidade);

    return this.enderecoRepository.save({
      ...create,
    });
  }

  async findAllByIdEmpresa(idEmpresa: number): Promise<EmpresaEndereco[]> {
    const enderecos = await this.enderecoRepository.find({
      where: {
        idEmpresa,
      },
      relations: {
        empresa: {
          enderecos: {
            cidade: {
              pais: true,
            },
          },
        },
      },
    });

    if (!enderecos || enderecos.length === 0) {
      throw new NotFoundException(
        `Endereço não encontrado para o Id Pessoa: ${idEmpresa}`,
      );
    }

    return enderecos;
  }
}
