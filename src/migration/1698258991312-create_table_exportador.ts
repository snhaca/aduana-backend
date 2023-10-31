import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableExportador1698258991312 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE exportador ( 
              id SERIAL PRIMARY KEY,
              id_pessoa INT NOT NULL,
              numero_exportador VARCHAR(45) DEFAULT null,
              observacao VARCHAR(250) DEFAULT null,
              desde DATE DEFAULT null,
              data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
		          data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,

              FOREIGN KEY (id_pessoa) REFERENCES pessoa (id));    
            
            CREATE SEQUENCE public.id_exportador_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_exportador_seq OWNED BY public.exportador.id;
            
            ALTER TABLE ONLY public.exportador ALTER COLUMN id SET DEFAULT nextval('public.id_exportador_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.exportador
            `);
  }
}
