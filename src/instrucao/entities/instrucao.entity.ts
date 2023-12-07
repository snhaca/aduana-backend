import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Exportador } from 'src/exportador/entities/exportador.entity';
import { Fatura } from 'src/fatura/entities/fatura.entity';
import { Importador } from 'src/importador/entities/importador.entity';
import { InstrucaoControlo } from 'src/instrucao-controlo/entities/instrucao-controlo.entity';
import { InstrucaoDespesa } from 'src/instrucao-despesa/entities/instrucao-despesa.entity';
import { InstrucaoDocRecebido } from 'src/instrucao-doc-recebido/entities/instrucao-doc-recebido.entity';
import { Moeda } from 'src/moeda/entities/moeda.entity';
import { Credito } from 'src/nota-credito/entities/credito.entity';
import { Debito } from 'src/nota-debito/entities/debito.entity';
import { Proforma } from 'src/proforma/entities/proforma.entity';
import { RegimeAduaneiro } from 'src/regime-aduaneiro/entities/regime-aduaneiro.entity';
import { Servico } from 'src/servico/entities/servico.entity';
import { Terminal } from 'src/terminal/entities/terminal.entity';
import { Transporte } from 'src/transporte/entities/transporte.entity';
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

@Entity({ name: 'instrucao' })
export class Instrucao {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'numero', nullable: false })
  numero: number;

  @Column({ name: 'ano', nullable: false })
  ano: number;

  @Column({ name: 'referencia', nullable: false })
  referencia: string;

  @Column({ name: 'numero_at', nullable: false })
  numeroAt: string;

  @Column({ name: 'contramarca', nullable: false })
  contramarca: string;

  @Column({ name: 'mercadoria', nullable: false })
  mercadoria: string;

  @Column({ name: 'num_fatura', nullable: false })
  numFatura: string;

  @Column({ name: 'total_fatura', type: 'decimal', nullable: false })
  totalFatura: number;

  @Column({ name: 'fob', type: 'decimal', nullable: false })
  fob: number;

  @Column({ name: 'frete', type: 'decimal', nullable: false })
  frete: number;

  @Column({ name: 'seguro', type: 'decimal', nullable: false })
  seguro: number;

  @Column({ name: 'outros_custos', type: 'decimal', nullable: false })
  outrosCustos: number;

  @Column({ name: 'cif', type: 'decimal', nullable: false })
  cif: number;

  @Column({ name: 'observacao' })
  observacao: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @Column({ name: 'id_cliente', nullable: false })
  idCliente: number;

  @Column({ name: 'id_exportador', nullable: false })
  idExportador: number;

  @Column({ name: 'id_importador', nullable: false })
  idImportador: number;

  @Column({ name: 'id_regime_aduaneiro', nullable: false })
  idRegimeAduaneiro: number;

  @Column({ name: 'id_moeda', nullable: false })
  idMoeda: number;

  @Column({ name: 'id_terminal', nullable: false })
  idTerminal: number;

  @Column({ name: 'id_transporte', nullable: false })
  idTransporte: number;

  @Column({ name: 'id_servico', nullable: false })
  idServico: number;

  @ManyToOne(() => Servico, (servico) => servico.instrucoes)
  @JoinColumn({ name: 'id_servico', referencedColumnName: 'id' })
  servico?: Servico;

  @ManyToOne(() => Cliente, (cliente) => cliente.instrucoes)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente?: Cliente;

  @ManyToOne(() => Exportador, (exportador) => exportador.instrucoes)
  @JoinColumn({ name: 'id_exportador', referencedColumnName: 'id' })
  exportador?: Exportador;

  @ManyToOne(() => Importador, (importador) => importador.instrucoes)
  @JoinColumn({ name: 'id_importador', referencedColumnName: 'id' })
  importador?: Importador;

  @ManyToOne(() => Moeda, (moeda) => moeda.instrucoes)
  @JoinColumn({ name: 'id_moeda', referencedColumnName: 'id' })
  moeda?: Moeda;

  @ManyToOne(() => RegimeAduaneiro, (regime) => regime.instrucoes)
  @JoinColumn({ name: 'id_regime_aduaneiro', referencedColumnName: 'id' })
  regime?: RegimeAduaneiro;

  @ManyToOne(() => Terminal, (terminal) => terminal.instrucoes)
  @JoinColumn({ name: 'id_terminal', referencedColumnName: 'id' })
  terminal?: Terminal;

  @ManyToOne(() => Transporte, (transporte) => transporte.instrucoes)
  @JoinColumn({ name: 'id_transporte', referencedColumnName: 'id' })
  transporte?: Transporte;

  @OneToMany(() => InstrucaoDespesa, (despesa) => despesa.instrucao)
  despesas?: InstrucaoDespesa[];

  @OneToMany(() => InstrucaoDocRecebido, (doc) => doc.instrucao)
  docRecebidos?: InstrucaoDocRecebido[];

  @OneToMany(() => InstrucaoControlo, (controlo) => controlo.instrucao)
  controlos?: InstrucaoControlo[];

  @OneToMany(() => Fatura, (fatura) => fatura.instrucao)
  faturas?: Fatura[];

  @OneToMany(() => Proforma, (proforma) => proforma.instrucao)
  proformas?: Proforma[];

  @OneToMany(() => Credito, (credito) => credito.instrucao)
  creditos?: Credito[];

  @OneToMany(() => Debito, (debito) => debito.instrucao)
  debitos?: Fatura[];
}
