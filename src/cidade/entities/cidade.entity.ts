/* eslint-disable prettier/prettier */
 
import { PaisEntity } from "src/pais/entities/pais.entity";
import { PessoaEnderecoEntity } from "src/pessoa_endereco/entities/pessoa_endereco.entity";
import { Entity, PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn,
    ManyToOne, 
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

  @OneToMany(() => PessoaEnderecoEntity, (endereco) => endereco.cidade)
  enderecos?: PessoaEnderecoEntity[]; 

  @ManyToOne(() => PaisEntity, (pais) => pais.cidades)
  @JoinColumn({name: 'id_pais', referencedColumnName: 'id'})
  pais?: PaisEntity;
}