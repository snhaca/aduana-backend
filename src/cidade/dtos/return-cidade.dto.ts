/* eslint-disable prettier/prettier */ 
import { ReturnPaisDTO } from 'src/pais/dtos/return-pais.dto';
import { CidadeEntity } from '../entities/cidade.entity';

export class ReturnCidadeDTO {
  nome: string;
  pais?: ReturnPaisDTO;

  constructor(cidade: CidadeEntity) {
    this.nome = cidade.nome;
    this.pais = cidade.pais ? new ReturnPaisDTO(cidade.pais) : undefined;
  }
}
