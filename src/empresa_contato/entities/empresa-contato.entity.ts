/* eslint-disable prettier/prettier */  
import { Empresa  } from "src/empresa/entities/empresa.entity";
import { 
    Column, 
    CreateDateColumn, 
    Entity,  
    JoinColumn,  
    ManyToOne,  
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
  } from "typeorm";
   
  @Entity({name: 'empresa_contato'})
  export class EmpresaContato {
    
    @PrimaryGeneratedColumn('rowid')
    id: number;
  
    @Column({ name: 'id_empresa', nullable: false })
    idEmpresa: number;  
  
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
    
    @ManyToOne(() => Empresa, (empresa) => empresa.contatos)
    @JoinColumn({name: 'id_empresa', referencedColumnName: 'id'})
    empresa?: Empresa;
  }