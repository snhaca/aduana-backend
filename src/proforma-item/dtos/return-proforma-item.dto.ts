/* eslint-disable prettier/prettier */

import { ProformaItem } from "../entities/proforma-item.entity";

export class ReturnProformaItemDto { 
  quantidade: number;
  valorUnitario: number; 
  valorTotal: number;
  taxaIva: number;
  usuarioCadastro: string;
  usuarioAtualiza: string; 

  constructor(item: ProformaItem) { 
    this.quantidade = item.quantidade;
    this.valorUnitario = item.valorUnitario;
    this.valorTotal = item.valorTotal;
    this.taxaIva = item.taxaIva;
    this.usuarioCadastro = item.usuarioCadastro;
    this.usuarioAtualiza = item.usuarioAtualiza;   
  }
}
