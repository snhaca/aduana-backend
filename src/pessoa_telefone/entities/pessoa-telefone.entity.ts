/* eslint-disable prettier/prettier */ 
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { Entity, PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne, 
} from "typeorm";

@Entity({ name: 'pessoa_telefone' })
export class PessoaTelefone {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_pessoa', nullable: false })
  idPessoa: number;
 
  @Column({ name: 'tipo', nullable: false })
  tipo: string;
 
  @Column({ name: 'numero', nullable: false })
  numero: string;
 
  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;  

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.pTelefones)
  @JoinColumn({name: 'id_pessoa', referencedColumnName: 'id'})
  pessoa?: Pessoa;
}