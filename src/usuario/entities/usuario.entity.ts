/* eslint-disable prettier/prettier */ 

import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
 
@Entity({name: 'usuario'})
export class UsuarioEntity {
  
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'email', nullable: false })
  email: string;
 
  @Column({ name: 'nuit', nullable: false })
  nuit: string;

  @Column({ name: 'senha', nullable: false })
  senha: string;

  @Column({ name: 'tipo_usuario', nullable: false })
  tipoUsuario: number;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

//   @OneToMany(() => AddressEntity, (address) => address.user)
//   addresses?: AddressEntity[];
  
//   @OneToMany(() => OrderEntity, (order) => order.address)
//   orders?: OrderEntity[];
}
