import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRecibo1701030786320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                        CREATE TABLE IF NOT EXISTS recibo ( 
                            id SERIAL PRIMARY KEY,
                            id_cliente INT NOT NULL,
                            numero INT NOT NULL, 
                            estagio VARCHAR(45) NOT NULL,
                            total DECIMAL(16,2) NOT NULL,
                            total_me DECIMAL(16,2) NOT NULL,
                            extenso TEXT NOT NULL,
                            extenso_en TEXT NOT NULL,
                            observacao TEXT DEFAULT null,
                            usuario_cadastro VARCHAR(100) NOT NULL,
                            usuario_atualiza VARCHAR(100) NOT NULL,
                            data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                            data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
                                
                            FOREIGN KEY (id_cliente) REFERENCES cliente (id));
                 
                        CREATE SEQUENCE public.id_recibo_seq
                            AS integer
                            START WITH 1
                            INCREMENT BY 1
                            NO MINVALUE
                            NO MAXVALUE
                            CACHE 1;
                        
                        ALTER SEQUENCE public.id_recibo_seq OWNED BY public.recibo.id;
                        
                        ALTER TABLE ONLY public.recibo ALTER COLUMN id SET DEFAULT nextval('public.id_recibo_seq'::regclass);
                    
                    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    DROP TABLE public.recibo
                    `);
  }
}
