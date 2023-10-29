import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePessoaEndereco1698263384558
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                CREATE TABLE pessoa_endereco ( 
                  id INTEGER PRIMARY KEY,
                  id_pessoa INT NOT NULL,
                  id_cidade INT NOT NULL,
                  logradouro VARCHAR(100) NOT NULL,
                  numero VARCHAR(45) DEFAULT null,
                  bairro VARCHAR(100) DEFAULT null,
                  quarteirao VARCHAR(45) DEFAULT null,
                  cidade VARCHAR(45) DEFAULT null,
                  municipio VARCHAR(45) DEFAULT null,
                  data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                  data_atualiza TIMESTAMP DEFAULT now() NOT NULL, 
         
                  FOREIGN KEY (id_pessoa) REFERENCES public.pessoa (id),
                  FOREIGN KEY (id_cidade) REFERENCES public.cidade (id));
         
                CREATE SEQUENCE public.id_pessoa_endereco_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                
                ALTER SEQUENCE public.id_pessoa_endereco_seq OWNED BY public.pessoa_endereco.id;
                
                ALTER TABLE ONLY public.pessoa_endereco ALTER COLUMN id SET DEFAULT nextval('public.id_pessoa_endereco_seq'::regclass);
            
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.pessoa_endereco
            `);
  }
}
