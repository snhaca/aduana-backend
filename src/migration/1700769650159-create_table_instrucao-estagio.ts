import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableInstrucaoEstagio1700769650159
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE IF NOT EXISTS instrucao_estagio ( 
            id SERIAL PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            descricao VARCHAR(200) DEFAULT null,
            data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
            data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL
            );
        
        CREATE SEQUENCE public.id_instrucao_estagio_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
        
        ALTER SEQUENCE public.id_instrucao_estagio_seq OWNED BY public.instrucao_estagio.id;
        
        ALTER TABLE ONLY public.instrucao_estagio ALTER COLUMN id SET DEFAULT nextval('public.id_instrucao_estagio_seq'::regclass);
    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.instrucao_estagio
                `);
  }
}
