import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableInstrucaoDoc1700769624665
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE IF NOT EXISTS instrucao_documento ( 
            id SERIAL PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            descricao VARCHAR(200) DEFAULT null,
            data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
            data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL
            );
                
        CREATE SEQUENCE public.id_instrucao_documento_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
        
        ALTER SEQUENCE public.id_instrucao_documento_seq OWNED BY public.instrucao_documento.id;
        
        ALTER TABLE ONLY public.instrucao_documento ALTER COLUMN id SET DEFAULT nextval('public.id_instrucao_documento_seq'::regclass);
    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.instrucao_documento
        `);
  }
}
