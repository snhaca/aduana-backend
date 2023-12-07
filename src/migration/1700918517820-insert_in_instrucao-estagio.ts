import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInInstrucaoEstagio1700918517820
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('1', 'Abertura'); 
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('2', 'TC');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('3', 'Classificação');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('4', 'Contramarca');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('5', 'Aviso');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('6', 'Pagamento');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('7', 'Caução');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('8', 'Exame');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('9', 'Verificação');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('10', 'Armazenagem');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('11', 'Aguarda chegada');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('12', 'Kudumba');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('13', 'Pesagem');
                INSERT INTO instrucao_estagio ("id", "nome") VALUES ('14', 'Aguarda documentos'); 
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                      DELETE FROM public.instrucao_estagio;
                  `);
  }
}
