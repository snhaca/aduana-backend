import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePais1698258942407 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE pais ( 
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) DEFAULT null,
                codigo VARCHAR(3) DEFAULT null,
                data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL
                );
            
            CREATE SEQUENCE public.id_pais_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_pais_seq OWNED BY public.pais.id;
            
            ALTER TABLE ONLY public.pais ALTER COLUMN id SET DEFAULT nextval('public.id_pais_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.pais
            `);
  }
}
