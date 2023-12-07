import { Instrucao } from 'src/instrucao/entities/instrucao.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'servico' })
export class Servico {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'nome', nullable: true })
  nome: string;

  @Column({ name: 'descricao', nullable: false })
  descricao: string;

  @OneToMany(() => Instrucao, (instrucao) => instrucao.servico)
  instrucoes?: Instrucao[];
}
