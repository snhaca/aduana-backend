import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaService } from 'src/empresa/empresa.service';
import { Repository } from 'typeorm';
import { CreateEmpresaTelefone } from './dtos/create-empresa-telefone.dto';
import { EmpresaTelefone } from './entities/empresa-telefone.entity';

@Injectable()
export class EmpresaTelefoneService {
  constructor(
    @InjectRepository(EmpresaTelefone)
    private readonly telefoneRepository: Repository<EmpresaTelefone>,
    private readonly empresaService: EmpresaService,
  ) {}

  async create(create: CreateEmpresaTelefone): Promise<EmpresaTelefone> {
    await this.empresaService.findOne(create.idEmpresa);

    return this.telefoneRepository.save({
      ...create,
    });
  }
}
