/* eslint-disable prettier/prettier */

import { Cidade } from "src/cidade/entities/cidade.entity";
import { Entity, PrimaryGeneratedColumn, 
    Column,
    OneToMany,  
} from "typeorm";

@Entity({ name: 'pais' })
export class Pais {
  @PrimaryGeneratedColumn('rowid')
  id: number; 

  @Column({ name: 'nome', nullable: true })
  nome: string;  
 
  @Column({ name: 'codigo', nullable: false })
  codigo: string;  

  @OneToMany(() => Cidade, (cidade) => cidade.pais)
  cidades?: Cidade[];
}