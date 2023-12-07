import { EstadoCivil } from '../entities/estado-civil.entity';

export class ReturnEstadoCivil {
  nome: string;
  descricao: string;

  constructor(estadoCivil: EstadoCivil) {
    this.nome = estadoCivil.nome;
    this.descricao = estadoCivil.descricao;
  }
}
