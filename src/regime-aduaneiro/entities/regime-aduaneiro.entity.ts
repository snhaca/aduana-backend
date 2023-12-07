import { Instrucao } from 'src/instrucao/entities/instrucao.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'regime_aduaneiro' })
export class RegimeAduaneiro {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'nome', nullable: true })
  nome: string;

  @Column({ name: 'descricao', nullable: false })
  descricao: string;

  @OneToMany(() => Instrucao, (instrucao) => instrucao.regime)
  instrucoes?: Instrucao[];
}
