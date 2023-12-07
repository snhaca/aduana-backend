/* eslint-disable prettier/prettier */ 
import { EmpresaContato } from "../entities/empresa-contato.entity";

export class ReturnEmpresaContato {  
    nome: string; 
    email: string; 
    observacao: string;     

    constructor(contato: EmpresaContato){ 
        this.nome = contato.nome; 
        this.email = contato.email; 
        this.observacao = contato.observacao;    
    }
 }