import { Artigo } from '../entities/artigo.entity';

export class ReturnArtigo {
  codigo: string;
  taxa_iva: number;
  descricao: string;
  tipo: string;

  constructor(artigo: Artigo) {
    this.codigo = artigo.codigo;
    this.taxa_iva = artigo.taxaIva;
    this.descricao = artigo.descricao;
    this.tipo = artigo.tipo;
  }
}
