/* eslint-disable prettier/prettier */ 
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
 
@Entity({name: 'usuario'})
export class Usuario {
  
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'email', nullable: false })
  email: string;
  
  @Column({ name: 'senha', nullable: false })
  senha: string;

  @Column({ name: 'tipo_usuario', nullable: false })
  tipoUsuario: number;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date; 
}
