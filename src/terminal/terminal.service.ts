import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Terminal } from './entities/terminal.entity';

@Injectable()
export class TerminalService {
  constructor(
    @InjectRepository(Terminal)
    private readonly terminalRepository: Repository<Terminal>,
  ) {}

  async findAll(): Promise<Terminal[]> {
    return this.terminalRepository.find();
  }
}
