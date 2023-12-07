import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableNotaDebito1700945937769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    CREATE TABLE IF NOT EXISTS nota_debito ( 
                        id SERIAL PRIMARY KEY,
                        id_instrucao INT NOT NULL,
                        id_cliente INT NOT NULL,
                        numero INT NOT NULL, 
                        estagio VARCHAR(45) NOT NULL,
                        cambio DECIMAL(16,4) NOT NULL,
                        cambio_compra DECIMAL(16,4) NOT NULL,
                        cif DECIMAL(16,2) NOT NULL,
                        cif_mzn DECIMAL(16,2) NOT NULL,
                        total_alfandega DECIMAL(16,2) NOT NULL,
                        total_oentidades DECIMAL(16,2) NOT NULL,
                        total_servico DECIMAL(16,2) NOT NULL,
                        iva_servico DECIMAL(16,2) NOT NULL,
                        total DECIMAL(16,2) NOT NULL,
                        total_me DECIMAL(16,2) NOT NULL,
                        extenso TEXT NOT NULL,
                        extenso_me TEXT NOT NULL,
                        observacao TEXT DEFAULT null,
                        usuario_cadastro VARCHAR(100) NOT NULL,
                        usuario_atualiza VARCHAR(100) NOT NULL,
                        data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                        data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
                
                        FOREIGN KEY (id_instrucao) REFERENCES instrucao (id),            
                        FOREIGN KEY (id_cliente) REFERENCES cliente (id));
             
                    CREATE SEQUENCE public.id_nota_debito_seq
                        AS integer
                        START WITH 1
                        INCREMENT BY 1
                        NO MINVALUE
                        NO MAXVALUE
                        CACHE 1;
                    
                    ALTER SEQUENCE public.id_nota_debito_seq OWNED BY public.nota_debito.id;
                    
                    ALTER TABLE ONLY public.nota_debito ALTER COLUMN id SET DEFAULT nextval('public.id_nota_debito_seq'::regclass);
                
                `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.nota_debito
                `);
  }
}
