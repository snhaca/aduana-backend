import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEmpresaContato } from './dtos/create-empresa-contato.dto';
import { EmpresaContatoService } from './empresa_contato.service';
import { EmpresaContato } from './entities/empresa-contato.entity';

@Controller('empresa-contato')
export class EmpresaContatoController {
  constructor(private readonly contatoService: EmpresaContatoService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateEmpresaContato): Promise<EmpresaContato> {
    return this.contatoService.create(create);
  }
}
