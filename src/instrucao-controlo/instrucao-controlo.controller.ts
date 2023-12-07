import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { InstrucaoControloService } from './instrucao-controlo.service';
import { InstrucaoControlo } from './entities/instrucao-controlo.entity';
import { CreateInstrucaoControlo } from './dto/create-instrucao-controlo.dto';

@Controller('instrucao-controlo')
export class InstrucaoControloController {
  constructor(private readonly controloService: InstrucaoControloService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(
    @Body() create: CreateInstrucaoControlo,
  ): Promise<InstrucaoControlo> {
    return this.controloService.create(create);
  }

  @Get()
  async findAll(): Promise<InstrucaoControlo[]> {
    return this.controloService.findAll();
  }
}
