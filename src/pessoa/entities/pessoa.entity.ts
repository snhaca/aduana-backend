/* eslint-disable prettier/prettier */  
import { Cliente } from "src/cliente/entities/cliente.entity"; 
import { Colaborador } from "src/colaborador/entities/colaborador.entity";
import { Exportador } from "src/exportador/entities/exportador.entity";
import { Fornecedor } from "src/fornecedor/entities/fornecedor.entity";
import { Importador } from "src/importador/entities/importador.entity";  
import { PessoaContato } from "src/pessoa_contato/entities/pessoa-contato.entity";
import { PessoaEndereco } from "src/pessoa_endereco/entities/pessoa_endereco.entity";
import { PessoaTelefone } from "src/pessoa_telefone/entities/pessoa-telefone.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
 
@Entity({name: 'pessoa'})
export class Pessoa {
  
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'nuit', nullable: false })
  nuit: string;

  @Column({ name: 'site', nullable: false })
  site: string;

  @Column({ name: 'eh_colaborador' })
  ehColaborador: string;
 
  @Column({ name: 'eh_cliente' })
  ehCliente: string;
 
  @Column({ name: 'eh_fornecedor' })
  ehFornecedor: string;

  @Column({ name: 'eh_importador' })
  ehImportador: string;

  @Column({ name: 'eh_exportador' })
  ehExportador: string;

  @Column({ name: 'eh_contador' })
  ehContador: string;

  @Column({ name: 'eh_transportador' })
  ehTransportador: string;

  @CreateDateColumn({ name: 'data_cadastro' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'data_atualiza' })
  dataAtualiza: Date;

  @OneToOne(() => Colaborador, (colaborador) => colaborador.pessoa)
  colaborador?: Colaborador;

  @OneToOne(() => Cliente, (cliente) => cliente.pessoa)
  cliente?: Cliente;

  @OneToOne(() => Fornecedor, (fornecedor) => fornecedor.pessoa)
  fornecedor?: Fornecedor;

  @OneToOne(() => Exportador, (exportador) => exportador.pessoa)
  exportador?: Exportador;

  @OneToOne(() => Importador, (importador) => importador.pessoa)
  importador?: Importador;

  @OneToMany(() => PessoaContato, (contato) => contato.pessoa)
  pContatos?: PessoaContato[]; 
  
  @OneToMany(() => PessoaEndereco, (endereco) => endereco.pessoa)
  pEnderecos?: PessoaEndereco[]; 
  
  @OneToMany(() => PessoaTelefone, (telefone) => telefone.pessoa)
  pTelefones?: PessoaTelefone[]; 
}
