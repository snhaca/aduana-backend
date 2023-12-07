import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableNivelFormacao1699815164019
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE IF NOT EXISTS nivel_formacao ( 
            id SERIAL PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            descricao VARCHAR(200) DEFAULT null,
            data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
            data_atualiza TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL);
        
        CREATE SEQUENCE public.id_nivel_formacao_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
        
        ALTER SEQUENCE public.id_nivel_formacao_seq OWNED BY public.nivel_formacao.id;
        
        ALTER TABLE ONLY public.nivel_formacao ALTER COLUMN id SET DEFAULT nextval('public.id_nivel_formacao_seq'::regclass);
    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    DROP TABLE public.nivel_formacao
                `);
  }
}
