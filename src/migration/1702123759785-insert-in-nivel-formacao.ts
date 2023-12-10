import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInNivelFormacao1702123759785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Primário', 'Primário'); 
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Básico', 'Básico'); 
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Secundário', 'Secundário'); 
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Técnico médio', 'Técnico médio'); 
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Pré-universitário', 'Pré-universitário'); 
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Bacharel', 'Bacharel');
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Licenciado', 'Licenciado');
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Engenheiro', 'Engenheiro'); 
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Técnico superior', 'Técnico superior'); 
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Pós-graduado', 'Pós-graduado'); 
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Doutorado', 'Doutorado'); 
        INSERT INTO nivel_formacao ("nome", "descricao") VALUES ('Não especificado', 'Não especificado');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                      DELETE FROM public.nivel_formacao;
                  `);
  }
}
