/* eslint-disable prettier/prettier */ 
import { Empresa } from "src/empresa/entities/empresa.entity";
import { Entity, PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne, 
} from "typeorm";

@Entity({ name: 'empresa_telefone' })
export class EmpresaTelefone {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_empresa', nullable: false })
  idEmpresa: number;
 
  @Column({ name: 'tipo', nullable: false })
  tipo: string;
 
  @Column({ name: 'numero', nullable: false })
  numero: string;
 
  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;  

  @ManyToOne(() => Empresa, (empresa) => empresa.telefones)
  @JoinColumn({name: 'id_empresa', referencedColumnName: 'id'})
  empresa?: Empresa;
}