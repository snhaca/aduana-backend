/* eslint-disable prettier/prettier */
 
import { Cidade } from "src/cidade/entities/cidade.entity"; 
import { Pessoa } from "src/pessoa/entities/pessoa.entity";
import { Entity, PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne, 
} from "typeorm";

@Entity({ name: 'pessoa_endereco' })
export class PessoaEndereco {
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

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.pEnderecos)
  @JoinColumn({name: 'id_pessoa', referencedColumnName: 'id'})
  pessoa?: Pessoa;

  @ManyToOne(() => Cidade, (cidade) => cidade.eEnderecos)
  @JoinColumn({name: 'id_cidade', referencedColumnName: 'id'})
  cidade?: Cidade;
}