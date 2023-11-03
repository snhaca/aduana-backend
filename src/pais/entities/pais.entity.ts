/* eslint-disable prettier/prettier */

import { CidadeEntity } from "src/cidade/entities/cidade.entity";
import { Entity, PrimaryGeneratedColumn, 
    Column,
    OneToMany,  
} from "typeorm";

@Entity({ name: 'pais' })
export class PaisEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number; 

  @Column({ name: 'nome', nullable: true })
  nome: string;  
 
  @Column({ name: 'codigo', nullable: false })
  codigo: string;  

  @OneToMany(() => CidadeEntity, (cidade) => cidade.pais)
  cidades?: CidadeEntity[];
}