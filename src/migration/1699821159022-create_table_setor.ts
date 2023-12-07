import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableSetor1699821159022 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE IF NOT EXISTS setor ( 
                id SERIAL PRIMARY KEY,
                id_empresa INT NOT NULL,
                nome VARCHAR(45) NOT NULL,
                descricao VARCHAR(250) DEFAULT null,
                data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                data_atualiza TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
        
                FOREIGN KEY (id_empresa) REFERENCES empresa (id)); 
            
            CREATE SEQUENCE public.id_setor_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_setor_seq OWNED BY public.setor.id;
            
            ALTER TABLE ONLY public.setor ALTER COLUMN id SET DEFAULT nextval('public.id_setor_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                        DROP TABLE public.setor
                    `);
  }
}
