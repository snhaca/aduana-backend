import { Servico } from '../entities/servico.entity';

export class ReturnServico {
  nome: string;
  descricao: string;

  constructor(servico: Servico) {
    this.nome = servico.nome;
    this.descricao = servico.descricao;
  }
}
