import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableImportador1698259000645 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE importador ( 
              id SERIAL PRIMARY KEY,
              id_pessoa INT NOT NULL,
              numero_importador VARCHAR(45) DEFAULT null,
              observacao VARCHAR(250) DEFAULT null,
              desde DATE DEFAULT null,
              data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
              data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
               
              FOREIGN KEY (id_pessoa) REFERENCES pessoa (id));
     
            CREATE SEQUENCE public.id_importador_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_importador_seq OWNED BY public.importador.id;
            
            ALTER TABLE ONLY public.importador ALTER COLUMN id SET DEFAULT nextval('public.id_importador_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.importador
            `);
  }
}
