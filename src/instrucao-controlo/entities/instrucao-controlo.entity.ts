import { InstrucaoEstagio } from 'src/instrucao-estagio/entities/instrucao-estagio.entity';
import { Instrucao } from 'src/instrucao/entities/instrucao.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
@Entity({ name: 'instrucao_controlo' })
export class InstrucaoControlo {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'operacao', nullable: false })
  operacao: string;

  @Column({ name: 'estagio', nullable: false })
  estagio: string;

  @Column({ name: 'observacao' })
  observacao: string;

  @Column({ name: 'usuario_cadastro', nullable: false })
  usuarioCadastro: string;

  @Column({ name: 'usuario_atualiza', nullable: false })
  usuarioAtualiza: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @Column({ name: 'id_instrucao', nullable: false })
  idInstrucao: number;

  @Column({ name: 'id_instrucao_estagio', nullable: false })
  idInstrucaoEstagio: number;

  @ManyToOne(() => Instrucao, (instrucao) => instrucao.controlos) // specify inverse side as a second parameter
  @JoinColumn({ name: 'id_instrucao', referencedColumnName: 'id' })
  instrucao: Instrucao;

  @ManyToOne(() => InstrucaoEstagio, (estagio) => estagio.controlos)
  @JoinColumn({ name: 'id_instrucao_estagio', referencedColumnName: 'id' })
  stage?: InstrucaoEstagio;
}
