import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableEmpresaEndereco1699821855410
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                CREATE TABLE IF NOT EXISTS empresa_endereco ( 
                    id SERIAL PRIMARY KEY,
                    id_empresa INT NOT NULL,
                    id_cidade INT NOT NULL,
                    complemento VARCHAR(150) NOT NULL,
                    numero VARCHAR(45) DEFAULT null,
                    bairro VARCHAR(45) DEFAULT null,
                    quarteirao VARCHAR(45) DEFAULT null,
                    data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                    data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL, 
            
                    FOREIGN KEY (id_empresa) REFERENCES public.empresa (id),
                    FOREIGN KEY (id_cidade) REFERENCES public.cidade (id));
            
                CREATE SEQUENCE public.id_empresa_endereco_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                
                ALTER SEQUENCE public.id_empresa_endereco_seq OWNED BY public.empresa_endereco.id;
                
                ALTER TABLE ONLY public.empresa_endereco ALTER COLUMN id SET DEFAULT nextval('public.id_empresa_endereco_seq'::regclass);
            
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                        DROP TABLE public.empresa_endereco
                    `);
  }
}
