import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableInstrucaoControlo1700769672852
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE IF NOT EXISTS instrucao_controlo ( 
            id SERIAL PRIMARY KEY,
            id_instrucao INT NOT NULL,
            id_instrucao_estagio INT NOT NULL,
            operacao VARCHAR(100) NOT NULL,
            estagio VARCHAR(100) NOT NULL,
            observacao VARCHAR(200) DEFAULT null,
            data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
            data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
            
            FOREIGN KEY (id_instrucao) REFERENCES public.instrucao (id),
            FOREIGN KEY (id_instrucao_estagio) REFERENCES public.instrucao_estagio (id));
        
        CREATE SEQUENCE public.id_instrucao_controlo_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
        
        ALTER SEQUENCE public.id_instrucao_controlo_seq OWNED BY public.instrucao_controlo.id;
        
        ALTER TABLE ONLY public.instrucao_controlo ALTER COLUMN id SET DEFAULT nextval('public.id_instrucao_controlo_seq'::regclass);
    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.instrucao_controlo
                `);
  }
}
