/* eslint-disable prettier/prettier */
import { ReturnPessoa } from 'src/pessoa/dtos/return-pessoa.dto';
import { Colaborador } from '../entities/colaborador.entity'; 

export class ReturnColaborador { 
    idEstadoCivil: number; 
    idSetor: number; 
    idNivelFormacao: number; 
    nomePai: string; 
    nomeMae: string; 
    raca: string; 
    sexo: string; 
    naturalidade: string; 
    nacionalidade: string; 
    dataNascimento: Date; 
    dataAdmissao: Date;   
    dataDemissao: Date; 
    desde: Date; 
    pessoa: ReturnPessoa;

    constructor(colaborador: Colaborador) { 
        this.idEstadoCivil = colaborador.idEstadoCivil; 
        this.idSetor = colaborador.idSetor; 
        this.idNivelFormacao = colaborador.idNivelFormacao; 
        this.nomePai = colaborador.nomePai; 
        this.nomeMae = colaborador.nomeMae; 
        this.raca = colaborador.raca; 
        this.sexo = colaborador.sexo; 
        this.naturalidade = colaborador.naturalidade; 
        this.nacionalidade = colaborador.nacionalidade; 
        this.dataNascimento = colaborador.dataNascimento; 
        this.dataAdmissao = colaborador.dataAdmissao;   
        this.dataDemissao = colaborador.dataDemissao; 
        this.desde = colaborador.desde;  
        this.pessoa = colaborador.pessoa ? new ReturnPessoa(colaborador.pessoa) : undefined;
    }
}