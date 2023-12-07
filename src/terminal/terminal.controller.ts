import { Controller, Get } from '@nestjs/common';
import { TerminalService } from './terminal.service';
import { Terminal } from './entities/terminal.entity';

@Controller('terminal')
export class TerminalController {
  constructor(private readonly terminalService: TerminalService) {}

  @Get()
  async findAll(): Promise<Terminal[]> {
    return this.terminalService.findAll();
  }
}
