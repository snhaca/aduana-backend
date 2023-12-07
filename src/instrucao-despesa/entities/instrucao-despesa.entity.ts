import { Artigo } from 'src/artigo/entities/artigo.entity';
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

@Entity({ name: 'instrucao_despesa' })
export class InstrucaoDespesa {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;

  @Column({ name: 'valor_unitario', type: 'decimal', nullable: false })
  valorUnitario: number;

  @Column({ name: 'valor_total', type: 'decimal', nullable: false })
  valorTotal: number;

  @Column({ name: 'usuario_cadastro', nullable: false })
  usuarioCadastro: string;

  @Column({ name: 'usuario_atualiza', nullable: false })
  usuarioAtualiza: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @Column({ name: 'id_artigo', nullable: false })
  idArtigo: number;

  @Column({ name: 'id_instrucao', nullable: false })
  idInstrucao: number;

  @ManyToOne(() => Artigo, (artigo) => artigo.despesas)
  @JoinColumn({ name: 'id_artigo', referencedColumnName: 'id' })
  artigo?: Artigo;

  @ManyToOne(() => Instrucao, (instrucao) => instrucao.despesas)
  @JoinColumn({ name: 'id_instrucao', referencedColumnName: 'id' })
  instrucao?: Instrucao;
}
