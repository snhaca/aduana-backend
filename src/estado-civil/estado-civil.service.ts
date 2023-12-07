import { Injectable } from '@nestjs/common';

@Injectable()
export class EstadoCivilService {
  findAll() {
    return `This action returns all estadoCivil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoCivil`;
  }
}
