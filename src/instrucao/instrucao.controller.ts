import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateInstrucaoDto } from './dto/create-instrucao.dto';
import { ReturnInstrucaoDto } from './dto/return-instrucao.dto';
import { Instrucao } from './entities/instrucao.entity';
import { InstrucaoService } from './instrucao.service';
import { Roles } from 'src/decorators/roles.decorator';
import { TipoUsuario } from 'src/usuario/enum/tipo-usuario.enum';
import { UpdateInstrucao } from './dto/update-instrucao.dto';

@Roles(TipoUsuario.Usuario, TipoUsuario.Admin, TipoUsuario.Root)
@Controller('instrucao')
export class InstrucaoController {
  constructor(private readonly instrucaoService: InstrucaoService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateInstrucaoDto): Promise<Instrucao> {
    return this.instrucaoService.create(create);
  }

  @Get()
  async findAll(): Promise<ReturnInstrucaoDto[]> {
    return (await this.instrucaoService.findAll()).map(
      (instrucao) => new ReturnInstrucaoDto(instrucao),
    );
  }

  // @Get('/:id')
  // async findOne(@Param('id') id: number): Promise<ReturnInstrucaoDto> {
  //   return new ReturnInstrucaoDto(await this.instrucaoService.findOne(id));
  // }

  @Get('/:id')
  async findOneUsingRelations(
    @Param('id') id: number,
  ): Promise<ReturnInstrucaoDto> {
    return new ReturnInstrucaoDto(
      await this.instrucaoService.findOneUsingRelations(id),
    );
  }

  // @Roles(TipoUsuario.Admin, TipoUsuario.Root)
  // @Delete('/:id')
  // async delete(@Param('id') id: number): Promise<DeleteResult> {
  //   return this.instrucaoService.delete(id);
  // }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.instrucaoService.delete(id);
  }

  @Roles(TipoUsuario.Admin, TipoUsuario.Root)
  @UsePipes(ValidationPipe)
  @Put('/:id')
  async update(
    @Body() update: UpdateInstrucao,
    @Param('id') id: number,
  ): Promise<Instrucao> {
    return this.instrucaoService.update(update, id);
  }
}
