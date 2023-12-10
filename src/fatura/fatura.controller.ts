import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { TipoUsuario } from 'src/usuario/enum/tipo-usuario.enum';
import { CreateFaturaDto } from './dtos/create-fatura.dto';
import { ReturnFaturaDto } from './dtos/return-fatura.dto';
import { Fatura } from './entities/fatura.entity';
import { FaturaService } from './fatura.service';
import { UpdateFaturaDto } from './dtos/update-fatura.dto';

@Roles(TipoUsuario.Usuario, TipoUsuario.Admin, TipoUsuario.Root)
@Controller('fatura')
export class FaturaController {
  constructor(private readonly faturaService: FaturaService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateFaturaDto): Promise<Fatura> {
    return this.faturaService.create(create);
  }

  @Get()
  async findAll(): Promise<ReturnFaturaDto[]> {
    return (await this.faturaService.findAll()).map(
      (fatura) => new ReturnFaturaDto(fatura),
    );
  }

  @Get('/:id')
  async findOneUsingRelations(
    @Param('id') id: number,
  ): Promise<ReturnFaturaDto> {
    return new ReturnFaturaDto(
      await this.faturaService.findOneUsingRelations(id),
    );
  }
  @Roles(TipoUsuario.Admin, TipoUsuario.Root)
  @UsePipes(ValidationPipe)
  @Put('/:id')
  async update(
    @Body() update: UpdateFaturaDto,
    @Param('id') id: number,
  ): Promise<Fatura> {
    return this.faturaService.update(update, id);
  }
}
