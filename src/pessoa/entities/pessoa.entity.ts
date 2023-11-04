/* eslint-disable prettier/prettier */ 
import { PessoaEnderecoEntity } from "src/pessoa_endereco/entities/pessoa_endereco.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
 
@Entity({name: 'pessoa'})
export class PessoaEntity {
  
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

  @OneToMany(() => PessoaEnderecoEntity, (endereco) => endereco.pessoa)
  enderecos?: PessoaEnderecoEntity[]; 

  // @OneToOne(() => ClienteEntity, (cliente) => cliente.pessoa)
  // cliente?: ClienteEntity;
}
