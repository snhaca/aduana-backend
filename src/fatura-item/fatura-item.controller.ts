import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFaturaItemDto } from './dtos/create-fatura-item.dto';
import { ReturnFaturaItemDto } from './dtos/return-fatura-item.dto';
import { FaturaItem } from './entities/fatura-item.entity';
import { FaturaItemService } from './fatura-item.service';

@Controller('fatura-item')
export class FaturaItemController {
  constructor(private readonly faturaService: FaturaItemService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() create: CreateFaturaItemDto): Promise<FaturaItem> {
    return this.faturaService.create(create);
  }

  @Get()
  async findAll(): Promise<ReturnFaturaItemDto[]> {
    return (await this.faturaService.findAll()).map(
      (fatura) => new ReturnFaturaItemDto(fatura),
    );
  }
}
