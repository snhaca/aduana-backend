/* eslint-disable prettier/prettier */  
import { EstadoCivil } from "src/estado-civil/entities/estado-civil.entity";
import { NivelFormacao } from "src/nivel-formacao/entities/nivel-formacao.entity";
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { Setor } from "src/setor/entities/setor.entity";
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
  } from "typeorm";
   
  @Entity({name: 'colaborador'})
  export class Colaborador {
    
    @PrimaryGeneratedColumn('rowid')
    id: number;
   
    @Column({ name: 'id_pessoa', nullable: false })
    idPessoa: number;
  
    @Column({ name: 'id_estado_civil', nullable: false })
    idEstadoCivil: number;
  
    @Column({ name: 'id_setor', nullable: false })
    idSetor: number;
  
    @Column({ name: 'id_nivel_formacao', nullable: false })
    idNivelFormacao: number;
  
    @Column({ name: 'nome_pai', nullable: false })
    nomePai: string;
  
    @Column({ name: 'nome_mae', nullable: false })
    nomeMae: string;
   
    @Column({ name: 'raca', nullable: false })
    raca: string;
  
    @Column({ name: 'sexo', nullable: false })
    sexo: string;
   
    @Column({ name: 'naturalidade', nullable: false })
    naturalidade: string;
  
    @Column({ name: 'nacionalidade', nullable: false })
    nacionalidade: string;
   
    @Column({ name: 'data_nascimento', type: 'date', nullable: true })
    dataNascimento: Date;
  
    @Column({ name: 'data_admissao', type: 'date', nullable: true })
    dataAdmissao: Date;  
     
    @Column({ name: 'data_demissao', type: 'date' })
    dataDemissao: Date;
  
    @Column({ name: 'desde', type: 'date' })
    desde: Date;  
     
    @CreateDateColumn({ name: 'data_cadastro' })
    dataCadastro: Date;
  
    @UpdateDateColumn({ name: 'data_atualiza' })
    dataAtualiza: Date;   
    
    @OneToOne(() => Pessoa, (pessoa) => pessoa.colaborador) // specify inverse side as a second parameter
    @JoinColumn({name: 'id_pessoa', referencedColumnName: 'id'})
    pessoa: Pessoa;
    
    @ManyToOne(() => EstadoCivil, (estadoCivil) => estadoCivil.colaboradores)
    @JoinColumn({name: 'id_estado_civil', referencedColumnName: 'id'})
    estadoCivil?: EstadoCivil;
    
    @ManyToOne(() => NivelFormacao, (nivelFormacao) => nivelFormacao.colaboradores)
    @JoinColumn({name: 'id_nivel_formacao', referencedColumnName: 'id'})
    nivelFormacao?: NivelFormacao;
    
    @ManyToOne(() => Setor, (setor) => setor.colaboradores)
    @JoinColumn({name: 'id_setor', referencedColumnName: 'id'})
    setor?: Setor;
  }
  