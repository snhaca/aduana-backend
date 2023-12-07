import { Artigo } from 'src/artigo/entities/artigo.entity';
import { Credito } from 'src/nota-credito/entities/credito.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'credito_item' })
export class CreditoItem {
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
  idCredito: number;

  @Column({ name: 'id_artigo', nullable: false })
  idArtigo: number;

  @ManyToOne(() => Credito, (credito) => credito.creditoItems)
  @JoinColumn({ name: 'id_credito', referencedColumnName: 'id' })
  credito?: Credito;

  @ManyToOne(() => Artigo, (artigo) => artigo.creditoItems)
  @JoinColumn({ name: 'id_artigo', referencedColumnName: 'id' })
  artigo?: Artigo;
}
