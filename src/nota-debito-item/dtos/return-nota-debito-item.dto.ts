/* eslint-disable prettier/prettier */

import { DebitoItem } from "../entities/debito-item.entity"; 

 
export class ReturnDebitoItemDto { 
  quantidade: number;
  valorUnitario: number; 
  valorTotal: number;
  taxaIva: number;
  usuarioCadastro: string;
  usuarioAtualiza: string; 

  constructor(item: DebitoItem) { 
    this.quantidade = item.quantidade;
    this.valorUnitario = item.valorUnitario;
    this.valorTotal = item.valorTotal;
    this.taxaIva = item.taxaIva;
    this.usuarioCadastro = item.usuarioCadastro;
    this.usuarioAtualiza = item.usuarioAtualiza;   
  }
}
