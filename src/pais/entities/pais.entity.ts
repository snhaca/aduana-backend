/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn, 
    Column,  
} from "typeorm";

@Entity({ name: 'pais' })
export class PaisEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number; 

  @Column({ name: 'nome', nullable: true })
  nome: string;  
 
  @Column({ name: 'codigo', nullable: false })
  codigo: string;  
}