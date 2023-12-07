import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEmpresaContato1699821870345
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    CREATE TABLE IF NOT EXISTS empresa_contato ( 
                        id SERIAL PRIMARY KEY,
                        id_empresa INT NOT NULL,
                        nome VARCHAR(45) NOT NULL,
                        email VARCHAR(45) DEFAULT null,
                        observacao VARCHAR(45) DEFAULT null,
                        data_cadastro TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
                        data_atualiza TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL, 
            
                        FOREIGN KEY (id_empresa) REFERENCES public.empresa (id));
                
                    CREATE SEQUENCE public.id_empresa_contato_seq
                        AS integer
                        START WITH 1
                        INCREMENT BY 1
                        NO MINVALUE
                        NO MAXVALUE
                        CACHE 1;
                    
                    ALTER SEQUENCE public.id_empresa_contato_seq OWNED BY public.empresa_contato.id;
                    
                    ALTER TABLE ONLY public.empresa_contato ALTER COLUMN id SET DEFAULT nextval('public.id_empresa_contato_seq'::regclass);
                
                `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                        DROP TABLE public.empresa_contato
                    `);
  }
}
