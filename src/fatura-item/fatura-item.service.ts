import { Injectable, NotFoundException } from '@nestjs/common';
import { FaturaItem } from './entities/fatura-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateFaturaItemDto } from './dtos/update-fatura-item.dto';
import { CreateFaturaItemDto } from './dtos/create-fatura-item.dto';

@Injectable()
export class FaturaItemService {
  constructor(
    @InjectRepository(FaturaItem)
    private readonly itemRepository: Repository<FaturaItem>,
  ) {}

  async create(create: CreateFaturaItemDto): Promise<FaturaItem> {
    return this.itemRepository.save({
      ...create,
    });
  }

  async findAll(): Promise<FaturaItem[]> {
    const faturaItems = await this.itemRepository.find();

    if (!faturaItems || faturaItems.length === 0) {
      throw new NotFoundException('Sem dados para mostrar');
    }

    return faturaItems;
  }

  async findOne(id: number): Promise<FaturaItem> {
    const faturaItem = await this.itemRepository.findOne({
      where: {
        id,
      },
    });

    if (!faturaItem) {
      throw new NotFoundException(`Id Item: ${id} não encontrado`);
    }

    return faturaItem;
  }

  async update(update: UpdateFaturaItemDto, id: number): Promise<FaturaItem> {
    const faturaItem = await this.findOne(id);

    return this.itemRepository.save({
      ...faturaItem,
      ...update,
    });
  }

  async delete(id: number) {
    const faturaItem = await this.findOne(id);
    if (!faturaItem || faturaItem === null) {
      throw new NotFoundException('User Not Found');
    } else {
      this.itemRepository.remove(faturaItem);
      return 'Successfully deleted';
    }
  }
}
