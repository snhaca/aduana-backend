import { Controller, Get } from '@nestjs/common';
import { InstrucaoDocService } from './instrucao-doc.service';
import { ReturnInstrucaoDtoDoc } from './dto/return-instrucao-doc.dto';

@Controller('instrucao-doc')
export class InstrucaoDocController {
  constructor(private readonly docRecebidoService: InstrucaoDocService) {}

  // @Get()
  // async findAll(): Promise<InstrucaoDoc[]> {
  //   return this.docRecebidoService.findAll();
  // }

  @Get()
  async findAll(): Promise<ReturnInstrucaoDtoDoc[]> {
    return (await this.docRecebidoService.findAll()).map(
      (doc) => new ReturnInstrucaoDtoDoc(doc),
    );
  }
}
