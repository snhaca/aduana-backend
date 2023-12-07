import { NivelFormacao } from '../entities/nivel-formacao.entity';

export class ReturnNivelFormacao {
  nome: string;
  descricao: string;

  constructor(nivelFormacao: NivelFormacao) {
    this.nome = nivelFormacao.nome;
    this.descricao = nivelFormacao.descricao;
  }
}
