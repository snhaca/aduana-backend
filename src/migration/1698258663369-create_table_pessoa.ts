import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePessoa1698258663369 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE pessoa ( 
              id INTEGER PRIMARY KEY, 
              nome VARCHAR(150) NOT NULL,
              nuit VARCHAR(45) NOT NULL, 
              email VARCHAR(100) UNIQUE DEFAULT NULL,
              site VARCHAR(45) DEFAULT NULL,
              eh_cliente VARCHAR(1) NOT NULL,
              eh_colaborador VARCHAR(1) NOT NULL,
              eh_fornecedor VARCHAR(1) NOT NULL,
              eh_transportador VARCHAR(1) NOT NULL,
              eh_contador VARCHAR(1) NOT NULL,
              eh_exportador VARCHAR(1) NOT NULL,
              eh_importador VARCHAR(1) NOT NULL,
              data_cadastro TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
              data_atualiza TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL);
      
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
