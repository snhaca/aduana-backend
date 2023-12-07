import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEmpresaEndereco } from './dtos/create-empresa-endereco.dto';
import { ReturnEmpresaEndereco } from './dtos/return-empresa-endereco.dto';
import { EmpresaEnderecoService } from './empresa_endereco.service';
import { EmpresaEndereco } from './entities/empresa-endereco.entity';

@Controller('empresa-endereco')
export class EmpresaEnderecoController {
  constructor(private readonly enderecoService: EmpresaEnderecoService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(
    @Body() create: CreateEmpresaEndereco,
  ): Promise<EmpresaEndereco> {
    return this.enderecoService.create(create);
  }

  @Get('/:idEmpresa')
  async findAllByIdEmpresa(
    @Param('idEmpresa') idEmpresa: number,
  ): Promise<ReturnEmpresaEndereco[]> {
    return (await this.enderecoService.findAllByIdEmpresa(idEmpresa)).map(
      (endereco) => new ReturnEmpresaEndereco(endereco),
    );
  }
}
