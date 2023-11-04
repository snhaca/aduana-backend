import { Controller } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  //   @UsePipes(ValidationPipe)
  //   @Post('/:idPessoa')
  //   async createCliente(
  //     @Body() createCliente: CreateCliente,
  //     @Param('idPessoa') idPessoa: number,
  //   ): Promise<ClienteEntity> {
  //     return this.clienteService.createCliente(createCliente, idPessoa);
  //   }
}
