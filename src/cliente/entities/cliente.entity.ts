/* eslint-disable prettier/prettier */  
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,   
} from "typeorm";

@Entity({ name: 'cliente' })
export class ClienteEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_pais', nullable: false })
  idPessoa: number;
 
  @CreateDateColumn({ name: 'desde' })
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

//   @OneToOne(() => PessoaEntity, (pessoa) => pessoa.cliente) // specify inverse side as a second parameter
//   @JoinColumn({name: 'id_pessoa', referencedColumnName: 'id'})
//   pessoa: PessoaEntity;
}