import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableArtigo1700769763125 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                CREATE TABLE artigo ( 
                    id SERIAL PRIMARY KEY,
                    codigo VARCHAR(10) DEFAULT null,
                    taxa_iva DECIMAL(16,2) NOT NULL,
                    descricao VARCHAR(250) DEFAULT null,
                    tipo VARCHAR(5) DEFAULT null,
                    data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                    data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL
                    );
                
                CREATE SEQUENCE public.id_artigo_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                
                ALTER SEQUENCE public.id_artigo_seq OWNED BY public.artigo.id;
                
                ALTER TABLE ONLY public.artigo ALTER COLUMN id SET DEFAULT nextval('public.id_artigo_seq'::regclass);
            
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.artigo
                `);
  }
}
