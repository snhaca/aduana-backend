import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInInstrucaoDoc1700918574642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO instrucao_documento ("id", "nome") VALUES ('1', 'Fatura proforma'); 
            INSERT INTO instrucao_documento ("id", "nome") VALUES ('2', 'Fatura');
            INSERT INTO instrucao_documento ("id", "nome") VALUES ('3', 'Lista de embalegens');
            INSERT INTO instrucao_documento ("id", "nome") VALUES ('4', 'Doc de transporte');
            INSERT INTO instrucao_documento ("id", "nome") VALUES ('5', 'Certificado');
            INSERT INTO instrucao_documento ("id", "nome") VALUES ('6', 'Licenca');  
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                      DELETE FROM public.instrucao_documento;
                  `);
  }
}
