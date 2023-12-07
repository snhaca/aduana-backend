/* eslint-disable prettier/prettier */
import { PessoaContato } from "../entities/pessoa-contato.entity";

export class ReturnPessoaContato {  
    nome: string; 
    email: string; 
    observacao: string;     

    constructor(contato: PessoaContato){ 
        this.nome = contato.nome; 
        this.email = contato.email; 
        this.observacao = contato.observacao;    
    }
 }