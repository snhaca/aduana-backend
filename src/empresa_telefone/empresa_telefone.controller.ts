import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEmpresaTelefone } from './dtos/create-empresa-telefone.dto';
import { EmpresaTelefoneService } from './empresa_telefone.service';
import { EmpresaTelefone } from './entities/empresa-telefone.entity';

@Controller('empresa-telefone')
export class EmpresaTelefoneController {
  constructor(private readonly telefoneService: EmpresaTelefoneService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(
    @Body() create: CreateEmpresaTelefone,
  ): Promise<EmpresaTelefone> {
    return this.telefoneService.create(create);
  }
}
