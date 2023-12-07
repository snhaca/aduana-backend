import { Injectable } from '@nestjs/common';

@Injectable()
export class NivelFormacaoService {
  findAll() {
    return `This action returns all nivelFormacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nivelFormacao`;
  }
}
