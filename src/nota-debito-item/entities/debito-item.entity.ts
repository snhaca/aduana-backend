import { Artigo } from 'src/artigo/entities/artigo.entity';
import { Debito } from 'src/nota-debito/entities/debito.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'debito_item' })
export class DebitoItem {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;

  @Column({ name: 'valor_unitario', type: 'decimal', nullable: false })
  valorUnitario: number;

  @Column({ name: 'valor_total', type: 'decimal', nullable: false })
  valorTotal: number;

  @Column({ name: 'taxa_iva', type: 'decimal', nullable: false })
  taxaIva: number;

  @Column({ name: 'usuario_cadastro', nullable: false })
  usuarioCadastro: string;

  @Column({ name: 'usuario_atualiza', nullable: false })
  usuarioAtualiza: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @Column({ name: 'id_fatura', nullable: false })
  idDebito: number;

  @Column({ name: 'id_artigo', nullable: false })
  idArtigo: number;

  @ManyToOne(() => Debito, (debito) => debito.debitoItems)
  @JoinColumn({ name: 'id_debito', referencedColumnName: 'id' })
  debito?: Debito;

  @ManyToOne(() => Artigo, (artigo) => artigo.debitoItems)
  @JoinColumn({ name: 'id_artigo', referencedColumnName: 'id' })
  artigo?: Artigo;
}
