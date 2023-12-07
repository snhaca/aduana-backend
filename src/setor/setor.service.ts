import { Injectable } from '@nestjs/common';

@Injectable()
export class SetorService {
  findAll() {
    return `This action returns all setor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} setor`;
  }
}
