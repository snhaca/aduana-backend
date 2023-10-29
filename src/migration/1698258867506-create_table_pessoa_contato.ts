import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePessoaContato1698258867506
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE pessoa_contato ( 
              id INTEGER PRIMARY KEY,
              id_pessoa INT NOT NULL,
              nome VARCHAR(45) NOT NULL,
              email VARCHAR(45) DEFAULT null,
              observacao VARCHAR(45) DEFAULT null,
              data_cadastro TIMESTAMP WITHOUT TIME ZONE DEFAULT now() NOT NULL,
              data_atualiza TIMESTAMP DEFAULT now() NOT NULL, 
    
              FOREIGN KEY (id_pessoa) REFERENCES public.pessoa (id));
      
            CREATE SEQUENCE public.id_pessoa_contato_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_pessoa_contato_seq OWNED BY public.pessoa_contato.id;
            
            ALTER TABLE ONLY public.pessoa_contato ALTER COLUMN id SET DEFAULT nextval('public.id_pessoa_contato_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.pessoa_contato
            `);
  }
}
