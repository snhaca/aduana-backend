/* eslint-disable prettier/prettier */
import { PaisEntity } from "../entities/pais.entity";

 export class ReturnPaisDTO { 
    nome: string;

    constructor(pais: PaisEntity) { 
        this.nome = pais.nome;
    }
}