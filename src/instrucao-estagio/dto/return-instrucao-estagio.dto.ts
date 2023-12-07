import { InstrucaoEstagio } from '../entities/instrucao-estagio.entity';

export class ReturnInstrucaoDtoEstagio {
  nome: string;
  descricao: string;

  constructor(estagio: InstrucaoEstagio) {
    this.nome = estagio.nome;
    this.descricao = estagio.descricao;
  }
}
