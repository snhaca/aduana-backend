import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableFornecedor1699814890350 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                CREATE TABLE fornecedor ( 
                  id SERIAL PRIMARY KEY,
                  id_pessoa INT NOT NULL, 
                  observacao VARCHAR(250) DEFAULT null,
                  desde DATE DEFAULT null,
                  data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                  data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
    
                  FOREIGN KEY (id_pessoa) REFERENCES pessoa (id));    
                
                CREATE SEQUENCE public.id_fornecedor_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                
                ALTER SEQUENCE public.id_fornecedor_seq OWNED BY public.fornecedor.id;
                
                ALTER TABLE ONLY public.fornecedor ALTER COLUMN id SET DEFAULT nextval('public.id_fornecedor_seq'::regclass);
            
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.fornecedor
                `);
  }
}
