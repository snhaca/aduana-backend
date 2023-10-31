import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCidade1698263360483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                CREATE TABLE cidade ( 
                  id SERIAL PRIMARY KEY,
                  nome VARCHAR(100) NOT NULL,
                  id_pais INT NOT NULL,
                  data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                  data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
    
                  FOREIGN KEY (id_pais) REFERENCES pais (id));
         
                CREATE SEQUENCE public.id_cidade_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                
                ALTER SEQUENCE public.id_cidade_seq OWNED BY public.cidade.id;
                
                ALTER TABLE ONLY public.cidade ALTER COLUMN id SET DEFAULT nextval('public.id_cidade_seq'::regclass);
            
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.cidade
            `);
  }
}
