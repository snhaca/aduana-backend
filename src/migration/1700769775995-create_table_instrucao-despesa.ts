import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableInstrucaoDespesa1700769775995
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE IF NOT EXISTS instrucao_despesa ( 
            id SERIAL PRIMARY KEY,
            id_artigo INT NOT NULL,
            id_instrucao INT NOT NULL,
            quantidade INT NOT NULL,
            valor_unitario DECIMAL(16,2) DEFAULT null,
            valor_total DECIMAL(16,2) DEFAULT null,
            taxa_iva DECIMAL(16,2) DEFAULT null,
            data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
            data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
            
            FOREIGN KEY (id_artigo) REFERENCES public.artigo (id),
            FOREIGN KEY (id_instrucao) REFERENCES public.instrucao (id));
        
        CREATE SEQUENCE public.id_instrucao_despesa_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
        
        ALTER SEQUENCE public.id_instrucao_despesa_seq OWNED BY public.instrucao_despesa.id;
        
        ALTER TABLE ONLY public.instrucao_despesa ALTER COLUMN id SET DEFAULT nextval('public.id_instrucao_despesa_seq'::regclass);
    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.instrucao_despesa
                `);
  }
}
