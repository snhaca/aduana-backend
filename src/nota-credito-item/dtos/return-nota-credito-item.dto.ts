/* eslint-disable prettier/prettier */

import { CreditoItem } from "../entities/credito-item.entity"; 

 
export class ReturnCreditoItemDto { 
  quantidade: number;
  valorUnitario: number; 
  valorTotal: number;
  taxaIva: number;
  usuarioCadastro: string;
  usuarioAtualiza: string; 

  constructor(item: CreditoItem) { 
    this.quantidade = item.quantidade;
    this.valorUnitario = item.valorUnitario;
    this.valorTotal = item.valorTotal;
    this.taxaIva = item.taxaIva;
    this.usuarioCadastro = item.usuarioCadastro;
    this.usuarioAtualiza = item.usuarioAtualiza;   
  }
}
