import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInEstadoCivil1702123747005 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                INSERT INTO estado_civil ("nome", "descricao") VALUES ('Solteiro', 'Solteiro'); 
                INSERT INTO estado_civil ("nome", "descricao") VALUES ('Casado', 'Casado'); 
                INSERT INTO estado_civil ("nome", "descricao") VALUES ('Divorciado', 'Divorciado');  
                INSERT INTO estado_civil ("nome", "descricao") VALUES ('Não especificado', 'Não especificado');
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                      DELETE FROM public.estado_civil;
                  `);
  }
}
