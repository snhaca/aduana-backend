import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableNotaCreditoItem1700945964096
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    CREATE TABLE IF NOT EXISTS nota_credito_item ( 
                        id SERIAL PRIMARY KEY,
                        id_nota_credito INT NOT NULL,
                        id_artigo INT NOT NULL,
                        quantidade INT NOT NULL,
                        valor_unitario DECIMAL(16,2) DEFAULT null,
                        valor_total DECIMAL(16,2) DEFAULT null,
                        taxa_iva DECIMAL(16,2) DEFAULT null,
                        usuario_cadastro VARCHAR(100) NOT NULL,
                        usuario_atualiza VARCHAR(100) NOT NULL,
                        data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                        data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
        
                        FOREIGN KEY (id_nota_credito) REFERENCES nota_credito (id),
                        FOREIGN KEY (id_artigo) REFERENCES artigo (id));
             
                    CREATE SEQUENCE public.id_nota_credito_item_seq
                        AS integer
                        START WITH 1
                        INCREMENT BY 1
                        NO MINVALUE
                        NO MAXVALUE
                        CACHE 1;
                    
                    ALTER SEQUENCE public.id_nota_credito_item_seq OWNED BY public.nota_credito_item.id;
                    
                    ALTER TABLE ONLY public.nota_credito_item ALTER COLUMN id SET DEFAULT nextval('public.id_nota_credito_item_seq'::regclass);
                
                `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DROP TABLE public.nota_credito_item
                `);
  }
}
