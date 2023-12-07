import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableInstrucao1700669692172 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                  CREATE TABLE IF NOT EXISTS instrucao ( 
                    id SERIAL PRIMARY KEY,
                    id_cliente INT NOT NULL,
                    id_exportador INT NOT NULL,
                    id_importador INT NOT NULL,
                    id_regime_aduaneiro INT NOT NULL,
                    id_moeda INT NOT NULL,
                    id_terminal INT NOT NULL,
                    id_transporte INT NOT NULL,
                    id_servico INT NOT NULL,
                    numero INT NOT NULL,
                    ano INT NOT NULL,
                    referencia VARCHAR(45) DEFAULT null,
                    numero_at VARCHAR(45) DEFAULT null,
                    contramarca VARCHAR(45) DEFAULT null,
                    mercadoria VARCHAR(200) NOT NULL,
                    num_fatura VARCHAR(45) NOT NULL,
                    total_fatura DECIMAL(16,2) NOT NULL,
                    fob DECIMAL(16,2) NOT NULL,
                    frete DECIMAL(16,2) NOT NULL,
                    seguro DECIMAL(16,2) NOT NULL,
                    outros_custos DECIMAL(16,2) NOT NULL,
                    cif DECIMAL(16,2) NOT NULL,
                    observacao VARCHAR(250) DEFAULT null, 
                    data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                    data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
     
                    FOREIGN KEY (id_cliente) REFERENCES public.cliente (id),
                    FOREIGN KEY (id_exportador) REFERENCES public.exportador (id),
                    FOREIGN KEY (id_importador) REFERENCES public.importador (id),
                    FOREIGN KEY (id_regime_aduaneiro) REFERENCES public.regime_aduaneiro (id),
                    FOREIGN KEY (id_importador) REFERENCES public.importador (id),
                    FOREIGN KEY (id_moeda) REFERENCES public.moeda (id),
                    FOREIGN KEY (id_terminal) REFERENCES public.terminal (id),
                    FOREIGN KEY (id_transporte) REFERENCES public.transporte (id),
                    FOREIGN KEY (id_servico) REFERENCES public.servico (id));
                
                CREATE SEQUENCE public.id_instrucao_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                
                ALTER SEQUENCE public.id_instrucao_seq OWNED BY public.instrucao.id;
                
                ALTER TABLE ONLY public.instrucao ALTER COLUMN id SET DEFAULT nextval('public.id_instrucao_seq'::regclass);
            
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.instrucao
                `);
  }
}
