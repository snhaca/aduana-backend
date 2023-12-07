import { Terminal } from '../entities/terminal.entity';

export class ReturnTerminal {
  codigo: string;
  nome: string;
  descricao: string;

  constructor(terminal: Terminal) {
    this.codigo = terminal.codigo;
    this.nome = terminal.nome;
    this.descricao = terminal.descricao;
  }
}
