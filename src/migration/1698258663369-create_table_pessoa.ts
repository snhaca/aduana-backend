import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePessoa1698258663369 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE pessoa ( 
              id INTEGER PRIMARY KEY, 
              nome VARCHAR(45) NOT NULL,
              nuit VARCHAR(45) NOT NULL, 
              email VARCHAR(45) DEFAULT null,
              site VARCHAR(45) DEFAULT null,
              cliente VARCHAR(1) NOT NULL,
              fornecedor VARCHAR(1) NOT NULL,
              transportador VARCHAR(1) NOT NULL,
              contador VARCHAR(1) NOT NULL,
              exportador VARCHAR(1) NOT NULL,
              importador VARCHAR(1) NOT NULL,
              data_cadastro TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
              data_atualiza TIMESTAMP DEFAULT now() NOT NULL);
      
            CREATE SEQUENCE public.id_pessoa_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_pessoa_seq OWNED BY public.pessoa.id;
            
            ALTER TABLE ONLY public.pessoa ALTER COLUMN id SET DEFAULT nextval('public.id_pessoa_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.pessoa
            `);
  }
}
