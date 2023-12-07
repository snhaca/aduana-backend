/* eslint-disable prettier/prettier */
import { EmpresaContato } from "src/empresa_contato/entities/empresa-contato.entity";
import { EmpresaEndereco } from "src/empresa_endereco/entities/empresa-endereco.entity";
import { EmpresaTelefone } from "src/empresa_telefone/entities/empresa-telefone.entity";
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  OneToMany 
} from "typeorm";

@Entity({name: 'empresa'})
export class Empresa {
  
  @PrimaryGeneratedColumn('rowid')
  id: number; 

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'nome_fantasia' })
  nomeFantasia: string;
 
  @Column({ name: 'nuit', nullable: false })
  nuit: string;

  @Column({ name: 'nuel' })
  nuel: string;
 
  @Column({ name: 'alvara' })
  alvara: string;

  @Column({ name: 'email' })
  email: string;
 
  @Column({ name: 'site' })
  site: string;
 
  @Column({ name: 'tipo' })
  tipo: string;
 
  @Column({ name: 'regime' })
  regime: string;
 
  @Column({ name: 'data_constituicao', type: 'date' })
  dataConstituicaoo: Date;
  
  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;    

  @OneToMany(() => EmpresaContato, (ccontato) => ccontato.empresa)
  contatos?: EmpresaContato[]; 

  @OneToMany(() => EmpresaEndereco, (cendereco) => cendereco.empresa)
  enderecos?: EmpresaEndereco[]; 
  
  @OneToMany(() => EmpresaTelefone, (telefone) => telefone.empresa)
  telefones?: EmpresaTelefone[]; 
}
