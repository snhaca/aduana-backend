import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsuario1698169366977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
		CREATE TABLE IF NOT EXISTS usuario ( 
		  id SERIAL PRIMARY KEY, 
		  tipo_usuario VARCHAR(5) NOT NULL,
		  nuit VARCHAR(11) NOT NULL,
		  nome VARCHAR(200) NOT NULL,
		  email VARCHAR(150) NOT NULL,
		  senha VARCHAR(100) NOT NULL,
		  data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
		  data_atualiza TIMESTAMP DEFAULT now() NOT NULL);
		
		CREATE SEQUENCE public.id_usuario_seq
			AS integer
			START WITH 1
			INCREMENT BY 1
			NO MINVALUE
			NO MAXVALUE
			CACHE 1;
		
		ALTER SEQUENCE public.id_usuario_seq OWNED BY public.usuario.id;
		
		ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.id_usuario_seq'::regclass);
	
	`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE public.usuario
        `);
  }
}
