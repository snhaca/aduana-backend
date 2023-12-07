/* eslint-disable prettier/prettier */

import { FaturaItem } from "../entities/fatura-item.entity";

 
export class ReturnFaturaItemDto { 
  quantidade: number;
  valorUnitario: number; 
  valorTotal: number;
  taxaIva: number;
  usuarioCadastro: string;
  usuarioAtualiza: string; 

  constructor(item: FaturaItem) { 
    this.quantidade = item.quantidade;
    this.valorUnitario = item.valorUnitario;
    this.valorTotal = item.valorTotal;
    this.taxaIva = item.taxaIva;
    this.usuarioCadastro = item.usuarioCadastro;
    this.usuarioAtualiza = item.usuarioAtualiza;   
  }
}
