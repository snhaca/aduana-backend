import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRegimeAduaneiro1700669652512
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    CREATE TABLE IF NOT EXISTS regime_aduaneiro ( 
                        id SERIAL PRIMARY KEY,
                        nome VARCHAR(45) NOT NULL,
                        descricao VARCHAR(100) DEFAULT null, 
                        data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                        data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL
                        );
                    
                    CREATE SEQUENCE public.id_regime_aduaneiro_seq
                        AS integer
                        START WITH 1
                        INCREMENT BY 1
                        NO MINVALUE
                        NO MAXVALUE
                        CACHE 1;
                    
                    ALTER SEQUENCE public.id_regime_aduaneiro_seq OWNED BY public.regime_aduaneiro.id;
                    
                    ALTER TABLE ONLY public.regime_aduaneiro ALTER COLUMN id SET DEFAULT nextval('public.id_regime_aduaneiro_seq'::regclass);
                
                `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                    DROP TABLE public.regime_aduaneiro
                    `);
  }
}
