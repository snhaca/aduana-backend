import { Transporte } from '../entities/transporte.entity';

export class ReturnTransporte {
  nome: string;
  descricao: string;

  constructor(transporte: Transporte) {
    this.nome = transporte.nome;
    this.descricao = transporte.descricao;
  }
}
