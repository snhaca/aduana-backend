import { InstrucaoDoc } from '../entities/instrucao-doc.entity';

export class ReturnInstrucaoDtoDoc {
  nome: string;
  descricao: string;

  constructor(doc: InstrucaoDoc) {
    this.nome = doc.nome;
    this.descricao = doc.descricao;
  }
}
