import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePessoaDTO } from './dtos/create-pessoa.dto';
import { PessoaService } from './pessoa.service';
import { PessoaEntity } from './entities/pessoa.entity';
import { ReturnPessoaDTO } from './dtos/return-pessoa.dto';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaoService: PessoaService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createPessoa(
    @Body() createPessoa: CreatePessoaDTO,
  ): Promise<PessoaEntity> {
    return this.pessoaoService.createPessoa(createPessoa);
  }

  @Get()
  async findPessoas(): Promise<ReturnPessoaDTO[]> {
    return (await this.pessoaoService.findPessoas()).map(
      (pessoaoEntity) => new ReturnPessoaDTO(pessoaoEntity),
    );
  }
}
