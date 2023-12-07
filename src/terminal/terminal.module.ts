import { Module } from '@nestjs/common';
import { TerminalService } from './terminal.service';
import { TerminalController } from './terminal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Terminal } from './entities/terminal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Terminal])],
  controllers: [TerminalController],
  providers: [TerminalService],
})
export class TerminalModule {}
