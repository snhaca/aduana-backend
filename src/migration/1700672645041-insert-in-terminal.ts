import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInTerminal1700672645041 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('1', '10DA1', '10DA1 Ressano Garcia - Delegação Aduaneira, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('2', '07SE1', '07SE1 Alfândega de Beira - Sede, Sofala');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('3', '11SE1', '11SE1 Alfândega de Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('4', '05SE2', '05SE2 Alfândega de Tete-Regulariza&ccedil;&otilde;es');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('5', '10DA4', '10DA4 Beluluane - Zona Franca, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('6', '05PF4', '05PF4 Calomue - Posto Fiscal, Tete');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('7', '05DA1', '05DA1 Cassacatiza - Delega&ccedil;&atilde;o Aduaneira, Tete');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('8', '09PF1', '09PF1 Chicualacuala - Posto Fiscal, Gaza');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('9', '01DA3', '01DA3 Cuamba - Niassa, Sub-Delega&ccedil;&atilde;o Aduaneira');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('10', '05DA3', '05DA3 Cuchamano - Delega&ccedil;&atilde;o Aduaneira, Tete');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('11', 'DGA', 'DGA Direc&ccedil;&atilde;o Geral das Alf&acirc;ndegas');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('12', '01DA2', '01DA2 Entrelagos - Delega&ccedil;&atilde;o Aduaneira, Niassa');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('13', '10PF2', '10PF2 Goba - Posto Fiscal, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('14', '08DA1', '08DA1 Inhambane - Delega&ccedil;&atilde;o Aduaneira');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('15', '01DA1', '01DA1 Lichinga - Delega&ccedil;&atilde;o Aduaneira, Sede');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('16', 'MOZAL', 'MOZAL MOZAL - MOZAL');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('17', '06DA2', '06DA2 Machipanda - Estrada, Sub-Delega&ccedil;&atilde;o Aduaneira, Manica');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('18', '01PF1', '01PF1 Mandimba - Niassa, Posto Fiscal');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('19', '06DA1', '06DA1 Manica - Sede Delega&ccedil;&atilde;o Aduaneira');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('20', '10DA3', '10DA3 Matola - Delega&ccedil;&atilde;o Aduaneira, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('21', '04PA3', '04PA3 Milange - Posto Fronteiri&ccedil;o, Zambezia');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('22', '03SE1', '03SE1 Nacala - Sede da Alf&acirc;ndega, Nampula');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('23', '10DA2', '10DA2 Namaacha - Delega&ccedil;&atilde;o Aduaneira, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('24', '03DA1', '03DA1 Nampula - Delega&ccedil;&atilde;o Aduaneira');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('25', '02SE1', '02SE1 Pemba - Sede da Alf&acirc;ndega, C. Delgado');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('26', '03PF1', '03PF1 Posto Fiscal Moma');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('27', '02PF3', '02PF3 Posto Fiscal do Nogomano');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('28', '07TI1', '07TI1 TIAR - Beira, Terminal Internacional Aer&eacute;a, Sofala');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('29', '11TI2', '11TI2 TIAR - Maputo, Terminal International Aer&eacute;a');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('30', '02TI1', '02TI1 TIAR - Pemba, Terminal Internacional A&eacute;reo, C. Delgado');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('31', '05TI1', '05TI1 TIAR - Tete, Terminal Internacional A&eacute;reo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('32', '10TI7', '10TI7 TIAUTO 1 - Machava, Terminal Internacional de Autom&oacute;veis 1, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('33', '11TI8', '11TI8 TIAUTO 2 - Multimodal, Terminal Internacional de Autom&oacute;veis 2, Mapu');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('34', '10TI9', '10TI9 TIAUTO 3 - FRIGO, Terminal Internacional de Automoveis 3, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('35', '11TI6', '11TI6 TIEPO-Terminal Internacional das Encomendas Postais, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('36', '07TI2', '07TI2 TIMAR - Beira, Terminal Internacional Marit&iacute;ma, Sofala');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('37', '11TI1', '11TI1 TIMAR - Maputo, Terminal International Mar&iacute;tima');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('38', '03TI1', '03TI1 TIMAR - Nacala, Terminal Internacional Maritima, Nampula');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('39', '10TI3', '10TI3 TIRO - FRIGO, Terminal International Rodovi&aacute;ria, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('40', '11TI9', '11TI9 TIRO MULTIMODAL-Terminal de Carga, Maputo');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('41', '05SE1', '05SE1 Tete - Sede da Alf&acirc;ndega');
                INSERT INTO terminal ("id", "codigo", "nome") VALUES ('42', '05DA2', '05DA2 Zobw&eacute; - Delega&ccedil;&atilde;o Aduaneira, Tete');
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                  DELETE FROM public.terminal;
              `);
  }
}
