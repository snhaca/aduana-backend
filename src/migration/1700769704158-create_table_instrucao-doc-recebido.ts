import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableInstrucaoDocRecebido1700769704158
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                CREATE TABLE IF NOT EXISTS instrucao_doc_recebido ( 
                    id SERIAL PRIMARY KEY,
                    id_instrucao INT NOT NULL,
                    id_instrucao_documento INT NOT NULL,
                    nome VARCHAR(45) NOT NULL,
                    descricao VARCHAR(100) DEFAULT null,
                    data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                    data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
                    
                    FOREIGN KEY (id_instrucao) REFERENCES public.instrucao (id),
                    FOREIGN KEY (id_instrucao_documento) REFERENCES public.instrucao_documento (id));
                
                CREATE SEQUENCE public.id_instrucao_doc_recebido_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                
                ALTER SEQUENCE public.id_instrucao_doc_recebido_seq OWNED BY public.instrucao_doc_recebido.id;
                
                ALTER TABLE ONLY public.instrucao_doc_recebido ALTER COLUMN id SET DEFAULT nextval('public.id_instrucao_doc_recebido_seq'::regclass);
            
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.instrucao_doc_recebido
                `);
  }
}
