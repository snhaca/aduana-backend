import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEmpresaTelefone1699821845320
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    CREATE TABLE IF NOT EXISTS empresa_telefone ( 
                        id SERIAL PRIMARY KEY,
                        id_empresa INT NOT NULL,
                        tipo VARCHAR(45) NOT NULL,
                        numero VARCHAR(45) NOT NULL,
                        data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                        data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL, 
        
                        FOREIGN KEY (id_empresa) REFERENCES empresa (id));
                
                    CREATE SEQUENCE public.id_empresa_telefone_seq
                        AS integer
                        START WITH 1
                        INCREMENT BY 1
                        NO MINVALUE
                        NO MAXVALUE
                        CACHE 1;
                    
                    ALTER SEQUENCE public.id_empresa_telefone_seq OWNED BY public.empresa_telefone.id;
                    
                    ALTER TABLE ONLY public.empresa_telefone ALTER COLUMN id SET DEFAULT nextval('public.id_empresa_telefone_seq'::regclass);
                
                `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                        DROP TABLE public.empresa_telefone
                    `);
  }
}
