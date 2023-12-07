/* eslint-disable prettier/prettier */   
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    JoinColumn,
    OneToOne, 
} from "typeorm";

@Entity({ name: 'fornecedor' })
export class Fornecedor {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_pessoa', nullable: false })
  idPessoa: number;
 
  @CreateDateColumn({ name: 'desde', nullable: true })
  desde: Date;
 
  @Column({ name: 'observacao', nullable: true })
  observacao: string;
 
  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;   

  @OneToOne(() => Pessoa, (pessoa) => pessoa.fornecedor) // specify inverse side as a second parameter
  @JoinColumn({name: 'id_pessoa', referencedColumnName: 'id'})
  pessoa: Pessoa;
}