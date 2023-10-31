import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInPais1698570092375 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
          INSERT INTO pais("id", "nome", "codigo") VALUES (1, 'Acre', 'AC');
          INSERT INTO pais("id", "nome", "codigo") VALUES (2, 'Alagoas', 'AL');
          INSERT INTO pais("id", "nome", "codigo") VALUES (3, 'Amazonas', 'AM');
          INSERT INTO pais("id", "nome", "codigo") VALUES (4, 'Amapá', 'AP');
          INSERT INTO pais("id", "nome", "codigo") VALUES (5, 'Bahia', 'BA');
          INSERT INTO pais("id", "nome", "codigo") VALUES (6, 'Ceará', 'CE');
          INSERT INTO pais("id", "nome", "codigo") VALUES (7, 'Distrito Federal', 'DF');
          INSERT INTO pais("id", "nome", "codigo") VALUES (8, 'Espírito Santo', 'ES');
          INSERT INTO pais("id", "nome", "codigo") VALUES (9, 'Goiás', 'GO');
          INSERT INTO pais("id", "nome", "codigo") VALUES (10, 'Maranhão', 'MA');
          INSERT INTO pais("id", "nome", "codigo") VALUES (11, 'Minas Gerais', 'MG');
          INSERT INTO pais("id", "nome", "codigo") VALUES (12, 'Mato Grosso do Sul', 'MS');
          INSERT INTO pais("id", "nome", "codigo") VALUES (13, 'Mato Grosso', 'MT');
          INSERT INTO pais("id", "nome", "codigo") VALUES (14, 'Pará', 'PA');
          INSERT INTO pais("id", "nome", "codigo") VALUES (15, 'Paraíba', 'PB');
          INSERT INTO pais("id", "nome", "codigo") VALUES (16, 'Pernambuco', 'PE');
          INSERT INTO pais("id", "nome", "codigo") VALUES (17, 'Piauí', 'PI');
          INSERT INTO pais("id", "nome", "codigo") VALUES (18, 'Paraná', 'PR');
          INSERT INTO pais("id", "nome", "codigo") VALUES (19, 'Rio de Janeiro', 'RJ');
          INSERT INTO pais("id", "nome", "codigo") VALUES (20, 'Rio Grande do Norte', 'RN');
          INSERT INTO pais("id", "nome", "codigo") VALUES (21, 'Rondônia', 'RO');
          INSERT INTO pais("id", "nome", "codigo") VALUES (22, 'Roraima', 'RR');
          INSERT INTO pais("id", "nome", "codigo") VALUES (23, 'Rio Grande do Sul', 'RS');
          INSERT INTO pais("id", "nome", "codigo") VALUES (24, 'Santa Catarina', 'SC');
          INSERT INTO pais("id", "nome", "codigo") VALUES (25, 'Sergipe', 'SE');
          INSERT INTO pais("id", "nome", "codigo") VALUES (26, 'São Paulo', 'SP');
          INSERT INTO pais("id", "nome", "codigo") VALUES (27, 'Tocantins', 'TO');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
          DELETE FROM public.pais;
      `);
  }
}
