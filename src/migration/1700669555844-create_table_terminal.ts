import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTerminal1700669555844 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                CREATE TABLE IF NOT EXISTS terminal ( 
                    id SERIAL PRIMARY KEY,
                    codigo VARCHAR(45) NOT NULL,
                    nome VARCHAR(250) NOT NULL,
                    descricao VARCHAR(250) DEFAULT null,
                    data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                    data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL
                    );
                
                CREATE SEQUENCE public.id_terminal_seq
                    AS integer
                    START WITH 1
                    INCREMENT BY 1
                    NO MINVALUE
                    NO MAXVALUE
                    CACHE 1;
                
                ALTER SEQUENCE public.id_terminal_seq OWNED BY public.terminal.id;
                
                ALTER TABLE ONLY public.terminal ALTER COLUMN id SET DEFAULT nextval('public.id_terminal_seq'::regclass);
            
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                        DROP TABLE public.terminal
                        `);
  }
}
