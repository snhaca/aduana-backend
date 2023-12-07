import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableReciboItem1701030793853 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                        CREATE TABLE IF NOT EXISTS recibo_item ( 
                            id SERIAL PRIMARY KEY,
                            id_recibo INT NOT NULL,
                            id_instrucao INT NOT NULL,
                            valor_unitario DECIMAL(16,2) NOT NULL,
                            forma_pagamento VARCHAR(100) NOT NULL,
                            numero VARCHAR(45) NOT NULL,
                            descricao VARCHAR(250) NOT NULL,
                            usuario_cadastro VARCHAR(100) NOT NULL,
                            usuario_atualiza VARCHAR(100) NOT NULL,
                            data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                            data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
            
                            FOREIGN KEY (id_recibo) REFERENCES recibo (id),
                            FOREIGN KEY (id_instrucao) REFERENCES instrucao (id));
                 
                        CREATE SEQUENCE public.id_recibo_item_seq
                            AS integer
                            START WITH 1
                            INCREMENT BY 1
                            NO MINVALUE
                            NO MAXVALUE
                            CACHE 1;
                        
                        ALTER SEQUENCE public.id_recibo_item_seq OWNED BY public.recibo_item.id;
                        
                        ALTER TABLE ONLY public.recibo_item ALTER COLUMN id SET DEFAULT nextval('public.id_recibo_item_seq'::regclass);
                    
                    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    DROP TABLE public.recibo_item
                    `);
  }
}
