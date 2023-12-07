import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableMoeda1700669573431 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                CREATE TABLE IF NOT EXISTS moeda ( 
                    id SERIAL PRIMARY KEY,
                    codigo VARCHAR(45) NOT NULL,
                    nome VARCHAR(45) NOT NULL,
                    descricao VARCHAR(100) DEFAULT null,
                    data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                    data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL
                    );
                
                CREATE SEQUENCE public.id_moeda_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                
                ALTER SEQUENCE public.id_moeda_seq OWNED BY public.moeda.id;
                
                ALTER TABLE ONLY public.moeda ALTER COLUMN id SET DEFAULT nextval('public.id_moeda_seq'::regclass);
            
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                        DROP TABLE public.moeda
                        `);
  }
}
