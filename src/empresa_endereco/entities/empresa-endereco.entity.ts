/* eslint-disable prettier/prettier */ 
import { Cidade } from "src/cidade/entities/cidade.entity"; 
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Entity, PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne, 
} from "typeorm";

@Entity({ name: 'empresa_endereco' })
export class EmpresaEndereco {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_empresa', nullable: false })
  idEmpresa: number;

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
 
  @ManyToOne(() => Empresa, (empresa) => empresa.enderecos)
  @JoinColumn({name: 'id_empresa', referencedColumnName: 'id'})
  empresa?: Empresa;
  
  @ManyToOne(() => Cidade, (cidade) => cidade.eEnderecos)
  @JoinColumn({name: 'id_cidade', referencedColumnName: 'id'})
  cidade?: Cidade;
}