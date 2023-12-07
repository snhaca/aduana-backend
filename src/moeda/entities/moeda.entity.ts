import { Instrucao } from 'src/instrucao/entities/instrucao.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'moeda' })
export class Moeda {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'codigo', nullable: false })
  codigo: string;

  @Column({ name: 'nome', nullable: true })
  nome: string;

  @Column({ name: 'descricao', nullable: false })
  descricao: string;

  @OneToMany(() => Instrucao, (instrucao) => instrucao.moeda)
  instrucoes?: Instrucao[];
}
