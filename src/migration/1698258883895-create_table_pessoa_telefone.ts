import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePessoaTelefone1698258883895
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE pessoa_telefone ( 
              id INTEGER PRIMARY KEY,
              id_pessoa INT NOT NULL,
              tipo VARCHAR(45) NOT NULL,
              numero VARCHAR(45) NOT NULL,
              data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
		          data_atualiza TIMESTAMP DEFAULT now() NOT NULL, 

              FOREIGN KEY (id_pessoa) REFERENCES pessoa (id));
     
            CREATE SEQUENCE public.id_pessoa_telefone_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_pessoa_telefone_seq OWNED BY public.pessoa_telefone.id;
            
            ALTER TABLE ONLY public.pessoa_telefone ALTER COLUMN id SET DEFAULT nextval('public.id_pessoa_telefone_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.pessoa_telefone
            `);
  }
}
