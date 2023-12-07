import { InstrucaoControlo } from '../entities/instrucao-controlo.entity';

export class ReturnInstrucaoDtoControlo {
  operacao: string;
  estagio: string;
  observacao: string;

  constructor(controlo: InstrucaoControlo) {
    this.operacao = controlo.operacao;
    this.estagio = controlo.estagio;
    this.observacao = controlo.observacao;
  }
}
