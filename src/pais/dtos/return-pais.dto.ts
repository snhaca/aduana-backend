/* eslint-disable prettier/prettier */
import { Pais } from "../entities/pais.entity";

 export class ReturnPais { 
    nome: string;

    constructor(pais: Pais) { 
        this.nome = pais.nome;
    }
}