import { Artigo } from 'src/artigo/entities/artigo.entity';
import { Proforma } from 'src/proforma/entities/proforma.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'proforma_item' })
export class ProformaItem {
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
  idProforma: number;

  @Column({ name: 'id_artigo', nullable: false })
  idArtigo: number;

  @ManyToOne(() => Proforma, (proforma) => proforma.proformaItems)
  @JoinColumn({ name: 'id_proforma', referencedColumnName: 'id' })
  proforma?: Proforma;

  @ManyToOne(() => Artigo, (artigo) => artigo.proformaItems)
  @JoinColumn({ name: 'id_artigo', referencedColumnName: 'id' })
  artigo?: Artigo;
}
