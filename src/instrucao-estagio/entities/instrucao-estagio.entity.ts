import { InstrucaoControlo } from 'src/instrucao-controlo/entities/instrucao-controlo.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'instrucao_estagio' })
export class InstrucaoEstagio {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'descricao', nullable: false })
  descricao: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @OneToMany(() => InstrucaoControlo, (controlo) => controlo.stage)
  controlos?: InstrucaoControlo[];
}
