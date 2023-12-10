/* eslint-disable prettier/prettier */   
import { Instrucao } from "src/instrucao/entities/instrucao.entity";
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    JoinColumn,
    OneToOne,
    OneToMany, 
} from "typeorm";

@Entity({ name: 'exportador' })
export class Exportador {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_pessoa', nullable: false })
  idPessoa: number;
 
  @Column({ name: 'desde', type: 'date' })
  desde: Date;
 
  @Column({ name: 'observacao'})
  observacao: string;
 
  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;   

  @OneToOne(() => Pessoa, (pessoa) => pessoa.exportador) // specify inverse side as a second parameter
  @JoinColumn({name: 'id_pessoa', referencedColumnName: 'id'})
  pessoa: Pessoa;

  @OneToMany(() => Instrucao, (instrucao) => instrucao.exportador)
  instrucoes?: Instrucao[];
}