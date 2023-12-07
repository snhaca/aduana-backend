/* eslint-disable prettier/prettier */
 
import { EmpresaEndereco } from "src/empresa_endereco/entities/empresa-endereco.entity";
import { Pais} from "src/pais/entities/pais.entity";
import { PessoaEndereco } from "src/pessoa_endereco/entities/pessoa_endereco.entity";
import { Entity, PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn,
    ManyToOne, 
} from "typeorm";

@Entity({ name: 'cidade' })
export class Cidade {
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

  @OneToMany(() => PessoaEndereco, (endereco) => endereco.cidade)
  pEnderecos?: PessoaEndereco[]; 
 
  @OneToMany(() => EmpresaEndereco, (endereco) => endereco.cidade)
  eEnderecos?: EmpresaEndereco[]; 

  @ManyToOne(() => Pais, (pais) => pais.cidades)
  @JoinColumn({name: 'id_pais', referencedColumnName: 'id'})
  pais?: Pais;
}