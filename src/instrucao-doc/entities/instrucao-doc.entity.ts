import { InstrucaoDocRecebido } from 'src/instrucao-doc-recebido/entities/instrucao-doc-recebido.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'instrucao_documento' })
export class InstrucaoDoc {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'descricao', nullable: false })
  descricao: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @OneToMany(() => InstrucaoDocRecebido, (doc) => doc.instrucaoDoc)
  docRecebidos?: InstrucaoDocRecebido[];
}
