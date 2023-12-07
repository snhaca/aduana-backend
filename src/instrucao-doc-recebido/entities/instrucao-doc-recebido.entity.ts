import { InstrucaoDoc } from 'src/instrucao-doc/entities/instrucao-doc.entity';
import { Instrucao } from 'src/instrucao/entities/instrucao.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'instrucao_doc_recebido' })
export class InstrucaoDocRecebido {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_instrucao', nullable: false })
  idInstrucao: number;

  @Column({ name: 'id_instrucao_documento', nullable: false })
  idInstrucaoDocumento: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'descricao', nullable: false })
  descricao: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @ManyToOne(() => Instrucao, (instrucao) => instrucao.docRecebidos)
  @JoinColumn({ name: 'id_instrucao', referencedColumnName: 'id' })
  instrucao?: Instrucao;

  @ManyToOne(() => InstrucaoDoc, (instrucao) => instrucao.docRecebidos)
  @JoinColumn({ name: 'id_instrucao', referencedColumnName: 'id' })
  instrucaoDoc?: InstrucaoDoc;
}
