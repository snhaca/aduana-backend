import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEstadoCivil1699815121909 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE IF NOT EXISTS estado_civil ( 
              id SERIAL PRIMARY KEY,  
              nome VARCHAR(200) NOT NULL,
              descricao VARCHAR(150) UNIQUE NOT NULL, 
              data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
              data_atualiza TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL);
            
            CREATE SEQUENCE public.id_estado_civil_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_estado_civil_seq OWNED BY public.estado_civil.id;
            
            ALTER TABLE ONLY public.estado_civil ALTER COLUMN id SET DEFAULT nextval('public.id_estado_civil_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.estado_civil
        `);
  }
}
