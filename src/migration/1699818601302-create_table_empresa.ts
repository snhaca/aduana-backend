import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEmpresa1699818601302 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE IF NOT EXISTS empresa ( 
                id SERIAL PRIMARY KEY,
                nome VARCHAR(150) NOT NULL,
                nome_fantasia VARCHAR(150) DEFAULT null,
                nuit VARCHAR(15) NOT NULL,
                nuel VARCHAR(15) DEFAULT null,
                alvara VARCHAR(45) DEFAULT null,
                email VARCHAR(100) DEFAULT null,
                site VARCHAR(100) DEFAULT null,
                tipo VARCHAR(1) DEFAULT NULL,
                regime VARCHAR(1) DEFAULT null,
                data_constituicao DATE DEFAULT null,
                data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL);
              
              CREATE SEQUENCE public.id_empresa_seq
                  AS integer
                  START WITH 1
                  INCREMENT BY 1
                  NO MINVALUE
                  NO MAXVALUE
                  CACHE 1;
              
              ALTER SEQUENCE public.id_empresa_seq OWNED BY public.empresa.id;
              
              ALTER TABLE ONLY public.empresa ALTER COLUMN id SET DEFAULT nextval('public.id_empresa_seq'::regclass);
          
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    DROP TABLE public.empresa
                `);
  }
}
