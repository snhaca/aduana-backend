/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn, 
} from "typeorm";

@Entity({ name: 'pessoa_endereco' })
export class PessoaEnderecoEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_pessoa', nullable: false })
  idPessoa: number;

  @Column({ name: 'id_cidade', nullable: false })
  idCidade: number;

  @Column({ name: 'complemento', nullable: false })
  complemento: string;

  @Column({ name: 'numero', nullable: true })
  numero: number;

  @Column({ name: 'bairro', nullable: true })
  bairro: string;
 
  @Column({ name: 'quarteirao', nullable: true })
  quarteirao: string; 
  
  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualizacao' })
  dataAtualizacao: Date;
  
//   @ManyToOne(() => UserEntity, (user) => user.addresses)
//   @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
//   user?: UserEntity

//   @ManyToOne(() => CityEntity, (city) => city.addresses)
//   @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
//   city?: CityEntity;
  
//   @OneToMany(() => OrderEntity, (order) => order.address)
//   orders?: OrderEntity[];
}