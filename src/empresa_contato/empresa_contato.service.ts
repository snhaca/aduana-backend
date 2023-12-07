import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaService } from 'src/empresa/empresa.service';
import { Repository } from 'typeorm';
import { EmpresaContato } from './entities/empresa-contato.entity';
import { CreateEmpresaContato } from './dtos/create-empresa-contato.dto';

@Injectable()
export class EmpresaContatoService {
  constructor(
    @InjectRepository(EmpresaContato)
    private readonly contatoRepository: Repository<EmpresaContato>,
    private readonly empresaService: EmpresaService,
  ) {}

  async create(create: CreateEmpresaContato): Promise<EmpresaContato> {
    await this.empresaService.findOne(create.idEmpresa);

    return this.contatoRepository.save({
      ...create,
    });
  }
}
