import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCliente1698258981279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE public.cliente ( 
              id SERIAL PRIMARY KEY,
              id_pessoa INT NOT NULL,
              taxa_desconto DECIMAL(16,4) DEFAULT null,
              limite_credito DECIMAL(16,4) DEFAULT null,
              observacao VARCHAR(250) DEFAULT null,
              desde DATE DEFAULT null,
              data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
		          data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,

              FOREIGN KEY (id_pessoa) REFERENCES pessoa (id));
     
            CREATE SEQUENCE public.id_cliente_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_cliente_seq OWNED BY public.cliente.id;
            
            ALTER TABLE ONLY public.cliente ALTER COLUMN id SET DEFAULT nextval('public.id_cliente_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.cliente
            `);
  }
}
