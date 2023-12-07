import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableColaborador1699821496153 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE IF NOT EXISTS colaborador ( 
                id SERIAL PRIMARY KEY, 
                id_pessoa INT NOT NULL,
                id_estado_civil INT NOT NULL,
                id_nivel_formacao INT NOT NULL,
                id_setor INT NOT NULL,
                nome_pai VARCHAR(100) NOT NULL,
                nome_mae VARCHAR(100) NOT NULL,
                raca VARCHAR(1) NOT NULL,
                sexo VARCHAR(1) NOT NULL,
                naturalidade VARCHAR(100) NOT NULL,
                nacionalidade VARCHAR(100) NOT NULL,
                data_nascimento DATE DEFAULT NULL,
                data_admissao DATE DEFAULT NULL,
                data_demissao DATE DEFAULT null, 
                desde DATE DEFAULT null,
                data_cadastro TIMESTAMP with time zone DEFAULT now() NOT NULL,
                data_atualiza TIMESTAMP with time zone DEFAULT now() NOT NULL,
     
                FOREIGN KEY (id_pessoa) REFERENCES public.pessoa (id),
                FOREIGN KEY (id_nivel_formacao) REFERENCES public.nivel_formacao (id),
                FOREIGN KEY (id_setor) REFERENCES public.setor (id),
                FOREIGN KEY (id_estado_civil) REFERENCES public.estado_civil (id));
        
            CREATE SEQUENCE public.id_colaborador_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
            
            ALTER SEQUENCE public.id_colaborador_seq OWNED BY public.colaborador.id;
            
            ALTER TABLE ONLY public.colaborador ALTER COLUMN id SET DEFAULT nextval('public.id_colaborador_seq'::regclass);
        
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.colaborador
        `);
  }
}
