/* eslint-disable prettier/prettier */ 
import { ReturnPais } from 'src/pais/dtos/return-pais.dto';
import { Cidade } from '../entities/cidade.entity';

export class ReturnCidade {
  nome: string;
  pais?: ReturnPais;

  constructor(cidade: Cidade) {
    this.nome = cidade.nome;
    this.pais = cidade.pais ? new ReturnPais(cidade.pais) : undefined;
  }
}
