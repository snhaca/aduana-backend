/* eslint-disable prettier/prettier */   
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { 
    Column, 
    CreateDateColumn, 
    Entity,  
    JoinColumn,  
    ManyToOne,  
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
  } from "typeorm";
   
  @Entity({name: 'pessoa_contato'})
  export class PessoaContato {
    
    @PrimaryGeneratedColumn('rowid')
    id: number;
  
    @Column({ name: 'id_pessoa', nullable: false })
    idPessoa: number;  
  
    @Column({ name: 'nome', nullable: false })
    nome: string;
  
    @Column({ name: 'email', nullable: false })
    email: string;
  
    @Column({ name: 'observacao', nullable: true })
    observacao: string;     

    @CreateDateColumn({ name: 'data_cadastro' })
    dataCadastro: Date;
    
    @UpdateDateColumn({ name: 'data_atualiza' })
    dataAtualiza: Date; 
    
    @ManyToOne(() => Pessoa, (pessoa) => pessoa.pContatos)
    @JoinColumn({name: 'id_pessoa', referencedColumnName: 'id'})
    pessoa?: Pessoa;
  }