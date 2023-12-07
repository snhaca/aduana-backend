import { InstrucaoDocRecebido } from '../entities/instrucao-doc-recebido.entity';

export class ReturnInstrucaoDtoDocRecebido {
  nome: string;
  descricao: string;

  constructor(doc: InstrucaoDocRecebido) {
    this.nome = doc.nome;
    this.descricao = doc.descricao;
  }
}
