import { Artigo } from 'src/artigo/entities/artigo.entity';
import { Fatura } from 'src/fatura/entities/fatura.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'fatura_item' })
export class FaturaItem {
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
  idFatura: number;

  @Column({ name: 'id_artigo', nullable: false })
  idArtigo: number;

  @ManyToOne(() => Fatura, (fatura) => fatura.faturaItems)
  @JoinColumn({ name: 'id_fatura', referencedColumnName: 'id' })
  fatura?: Fatura;

  @ManyToOne(() => Artigo, (artigo) => artigo.faturaItems)
  @JoinColumn({ name: 'id_artigo', referencedColumnName: 'id' })
  artigo?: Artigo;
}
