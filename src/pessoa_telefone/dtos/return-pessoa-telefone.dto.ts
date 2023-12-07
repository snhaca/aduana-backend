/* eslint-disable prettier/prettier */
import { PessoaTelefone } from "../entities/pessoa-telefone.entity";

export class ReturnPessoaTelefone {  
    tipo: string; 
    numero: string;      

    constructor(telefone: PessoaTelefone){ 
        this.tipo = telefone.tipo; 
        this.numero = telefone.numero;     
    }
 }