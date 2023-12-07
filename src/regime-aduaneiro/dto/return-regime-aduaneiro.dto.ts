import { RegimeAduaneiro } from '../entities/regime-aduaneiro.entity';

export class ReturnRegimeAduaneiro {
  nome: string;
  descricao: string;

  constructor(regime: RegimeAduaneiro) {
    this.nome = regime.nome;
    this.descricao = regime.descricao;
  }
}
