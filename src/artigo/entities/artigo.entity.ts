import { FaturaItem } from 'src/fatura-item/entities/fatura-item.entity';
import { InstrucaoDespesa } from 'src/instrucao-despesa/entities/instrucao-despesa.entity';
import { CreditoItem } from 'src/nota-credito-item/entities/credito-item.entity';
import { DebitoItem } from 'src/nota-debito-item/entities/debito-item.entity';
import { ProformaItem } from 'src/proforma-item/entities/proforma-item.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'artigo' })
export class Artigo {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'codigo', nullable: false })
  codigo: string;

  @Column({ name: 'taxa_iva', nullable: false })
  taxaIva: number;

  @Column({ name: 'descricao', nullable: false })
  descricao: string;

  @Column({ name: 'tipo', nullable: false })
  tipo: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @OneToMany(() => InstrucaoDespesa, (despesa) => despesa.artigo)
  despesas?: InstrucaoDespesa[];

  @OneToMany(() => FaturaItem, (faturaItem) => faturaItem.artigo)
  faturaItems?: FaturaItem[];

  @OneToMany(() => CreditoItem, (creditoItem) => creditoItem.artigo)
  creditoItems?: CreditoItem[];

  @OneToMany(() => DebitoItem, (debitoItem) => debitoItem.artigo)
  debitoItems?: DebitoItem[];

  @OneToMany(() => ProformaItem, (proformaItem) => proformaItem.artigo)
  proformaItems?: ProformaItem[];
}
