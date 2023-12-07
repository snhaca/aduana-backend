import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Instrucao } from 'src/instrucao/entities/instrucao.entity';
import { DebitoItem } from 'src/nota-debito-item/entities/debito-item.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'nota_debito' })
export class Debito {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'numero', nullable: false })
  numero: number;

  @Column({ name: 'estagio', nullable: false })
  estagio: string;

  @Column({ name: 'cambio', type: 'decimal', nullable: false })
  cambio: number;

  @Column({ name: 'cambio_compra', type: 'decimal', nullable: false })
  cambioCompra: number;

  @Column({ name: 'cif', type: 'decimal', nullable: false })
  cif: number;

  @Column({ name: 'cif_mzn', type: 'decimal', nullable: false })
  cifMzn: number;

  @Column({ name: 'total_alfandega', type: 'decimal', nullable: false })
  totalAlfandega: number;

  @Column({ name: 'total_oentidades', type: 'decimal', nullable: false })
  totalOEntidades: number;

  @Column({ name: 'total_servico', nullable: false })
  totalServico: number;

  @Column({ name: 'iva_servico', type: 'decimal', nullable: false })
  ivaServico: number;

  @Column({ name: 'total', type: 'decimal', nullable: false })
  total: number;

  @Column({ name: 'total_me', type: 'decimal', nullable: false })
  totalMe: number;

  @Column({ name: 'extenso', nullable: false })
  extenso: string;

  @Column({ name: 'extenso_me', type: 'decimal', nullable: false })
  extensoMe: string;

  @Column({ name: 'observacao', type: 'decimal', nullable: false })
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

  @Column({ name: 'id_cliente', nullable: false })
  idCliente: number;

  @ManyToOne(() => Instrucao, (instrucao) => instrucao.faturas)
  @JoinColumn({ name: 'id_instrucao', referencedColumnName: 'id' })
  instrucao?: Instrucao;

  @ManyToOne(() => Cliente, (cliente) => cliente.debitos)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente?: Cliente;

  @OneToMany(() => DebitoItem, (debitoItem) => debitoItem.debito)
  debitoItems?: DebitoItem[];
}
