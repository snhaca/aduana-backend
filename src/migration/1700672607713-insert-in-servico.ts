import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInServico1700672607713 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO servico ("id", "nome") VALUES ('1', 'Saida antecipada');
            INSERT INTO servico ("id", "nome") VALUES ('2', 'Declaração Aduaneira');
            INSERT INTO servico ("id", "nome") VALUES ('3', 'PAF Pedido de Inspecção');
            INSERT INTO servico ("id", "nome") VALUES ('4', 'I1 Pedido de Isenção');
            INSERT INTO servico ("id", "nome") VALUES ('5', 'Pedido de Descarga Directa');
            INSERT INTO servico ("id", "nome") VALUES ('6', 'Pedido de Embarque Antecipado');
            INSERT INTO servico ("id", "nome") VALUES ('7', 'Pedido de Importação Temporária');
            INSERT INTO servico ("id", "nome") VALUES ('8', 'Pedido de Lista global I4');
            INSERT INTO servico ("id", "nome") VALUES ('9', 'Não especificado');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                  DELETE FROM public.servico;
              `);
  }
}
