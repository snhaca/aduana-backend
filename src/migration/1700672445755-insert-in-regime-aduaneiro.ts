import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInRegimeAduaneiro1700672445755
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO regime_aduaneiro ("id", "nome") VALUES ('1', 'Importação');
            INSERT INTO regime_aduaneiro ("id", "nome") VALUES ('2', 'Exportação');
            INSERT INTO regime_aduaneiro ("id", "nome") VALUES ('3', 'Armazéns');
            INSERT INTO regime_aduaneiro ("id", "nome") VALUES ('4', 'Trânsito');
            INSERT INTO regime_aduaneiro ("id", "nome") VALUES ('5', 'ZFI; ZEE e Lojas Francas');
            INSERT INTO regime_aduaneiro ("id", "nome") VALUES ('6', 'Exportação Temporária');
            INSERT INTO regime_aduaneiro ("id", "nome") VALUES ('7', 'Importação Temporária');
            INSERT INTO regime_aduaneiro ("id", "nome") VALUES ('8', 'Re-Exportação');
            INSERT INTO regime_aduaneiro ("id", "nome") VALUES ('9', 'Re-Importação');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
              DELETE FROM public.regime_aduaneiro;
          `);
  }
}
