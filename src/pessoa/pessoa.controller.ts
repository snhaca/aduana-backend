import { Body, Controller, Post } from '@nestjs/common';
import { CreatePessoaDTO } from './dtos/create-pessoa.dto';

@Controller('pessoa')
export class PessoaController {
  @Post()
  async findAll(@Body() createPessoa: CreatePessoaDTO) {
    return createPessoa;
  }
}
