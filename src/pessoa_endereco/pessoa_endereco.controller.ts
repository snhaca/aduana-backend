import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PessoaEnderecoService } from './pessoa_endereco.service';
import { CreatePessoaEnderecoDTO } from './dtos/create-pessoa-endereco.dto';
import { PessoaEnderecoEntity } from './entities/pessoa_endereco.entity';

@Controller('pessoa-endereco')
export class PessoaEnderecoController {
  constructor(private readonly enderecoService: PessoaEnderecoService) {}

  @UsePipes(ValidationPipe)
  @Post('/:idPessoa')
  async createPessoaEndereco(
    @Body() createEnderecoDTO: CreatePessoaEnderecoDTO,
    @Param('idPessoa') idPessoa: number,
  ): Promise<PessoaEnderecoEntity> {
    return this.enderecoService.createPessoaEndereco(
      createEnderecoDTO,
      idPessoa,
    );
  }
}
