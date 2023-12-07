import { Colaborador } from 'src/colaborador/entities/colaborador.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'setor' })
export class Setor {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_empresa', nullable: false })
  idEmpresa: string;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'descricao' })
  descricao: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @OneToMany(() => Colaborador, (colaborador) => colaborador.setor)
  colaboradores?: Colaborador[];
}
