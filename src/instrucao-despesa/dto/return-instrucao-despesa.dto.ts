import { InstrucaoDespesa } from '../entities/instrucao-despesa.entity';

export class ReturnInstrucaoDtoDespesa {
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;

  constructor(despesa: InstrucaoDespesa) {
    this.quantidade = despesa.quantidade;
    this.valorUnitario = despesa.valorUnitario;
    this.valorTotal = despesa.valorTotal;
  }
}
