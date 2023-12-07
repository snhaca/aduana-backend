import { Moeda } from '../entities/moeda.entity';

export class ReturnMoeda {
  codigo: string;
  nome: string;
  descricao: string;

  constructor(moeda: Moeda) {
    this.codigo = moeda.codigo;
    this.nome = moeda.nome;
    this.descricao = moeda.descricao;
  }
}
