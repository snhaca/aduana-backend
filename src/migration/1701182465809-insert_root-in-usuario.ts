import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertRootInUsuario1701182465809 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                  INSERT INTO public."usuario"(
                      tipo_usuario, nome, email, senha)
                      VALUES (2, 'root', 'root@root.com', '$2b$10$BhaMKrzUdPJFaHLcdvls7.lFMHojH9/sG/jwrp.Is0YXIlpBe4gI.');
              `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                DELETE FROM public."usuario"
                    WHERE email like 'root@root.com';
            `);
  }
}
