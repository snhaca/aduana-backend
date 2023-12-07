import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInTransporte1700672623052 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO transporte ("id", "nome") VALUES ('1', 'Aéreo');
            INSERT INTO transporte ("id", "nome") VALUES ('2', 'Marítimo');
            INSERT INTO transporte ("id", "nome") VALUES ('3', 'Rodoviário');
            INSERT INTO transporte ("id", "nome") VALUES ('4', 'Ferroviário');
            INSERT INTO transporte ("id", "nome") VALUES ('5', 'Outro');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                  DELETE FROM public.transporte;
              `);
  }
}
