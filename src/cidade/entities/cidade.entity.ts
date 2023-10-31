/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn, 
} from "typeorm";

@Entity({ name: 'cidade' })
export class CidadeEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_pais', nullable: false })
  idPais: number;
 
  @Column({ name: 'nome', nullable: false })
  nome: string;
 
  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;  
}