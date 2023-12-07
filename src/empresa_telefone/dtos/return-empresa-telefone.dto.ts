/* eslint-disable prettier/prettier */ 
import { EmpresaTelefone } from "../entities/empresa-telefone.entity";

export class ReturnEmpresaTelefone {  
    tipo: string; 
    numero: string;      

    constructor(telefone: EmpresaTelefone){ 
        this.tipo = telefone.tipo; 
        this.numero = telefone.numero;     
    }
 }