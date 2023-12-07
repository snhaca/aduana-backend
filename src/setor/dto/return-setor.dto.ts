import { Setor } from '../entities/setor.entity';

export class ReturnSetor {
  nome: string;
  descricao: string;

  constructor(setor: Setor) {
    this.nome = setor.nome;
    this.descricao = setor.descricao;
  }
}
