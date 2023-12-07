/* eslint-disable prettier/prettier */   
import { Fatura } from "src/fatura/entities/fatura.entity";
import { Instrucao } from "src/instrucao/entities/instrucao.entity";
import { Credito } from "src/nota-credito/entities/credito.entity";
import { Debito } from "src/nota-debito/entities/debito.entity";
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { Proforma } from "src/proforma/entities/proforma.entity";
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

@Entity({ name: 'cliente' })
export class Cliente {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_pessoa', nullable: false })
  idPessoa: number;
 
  @Column({ name: 'desde', nullable: true })
  desde: Date;

  @Column({ name: 'taxa_desconto', nullable: false })
  taxaDesconto: number;
 
  @Column({ name: 'limite_credito', nullable: false })
  limiteCredito: number;
 
  @Column({ name: 'observacao', nullable: true })
  observacao: string;
 
  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;   

  @OneToOne(() => Pessoa, (pessoa) => pessoa.cliente) // specify inverse side as a second parameter
  @JoinColumn({name: 'id_pessoa', referencedColumnName: 'id'})
  pessoa: Pessoa;

  @OneToMany(() => Instrucao, (instrucao) => instrucao.cliente)
  instrucoes?: Instrucao[];
  
  @OneToMany(() => Fatura, (fatura) => fatura.cliente)
  faturas?: Fatura[];
  
  @OneToMany(() => Proforma, (proforma) => proforma.cliente)
  proformas?: Proforma[];
  
  @OneToMany(() => Credito, (credito) => credito.cliente)
  creditos?: Fatura[];
  
  @OneToMany(() => Debito, (debito) => debito.cliente)
  debitos?: Debito[];
}