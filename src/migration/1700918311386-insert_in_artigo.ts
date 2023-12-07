import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInArtigo1700918311386 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` 
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('A001', 'Direitos aduaneiros - Duties', 0.00, 'A');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('A002', 'Sobretaxa - Import surcharge', 0.00, 'A');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('A003', 'Imposto de consumo - Specific excise duty(tax)', 0.00, 'A');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('A004', 'IVA no Despacho - Customs VAT', 0.00, 'A');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('A005', 'Guias AT - Customs fees', 0.00, 'A');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('A006', 'Depositos AT - Customs deposits', 0.00, 'A');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('A007', 'Taxas AT - Customs taxs', 0.00, 'A');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('A008', 'Taxa de Serviços Aduneiros - Customs Service Fees', 0.00, 'A');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B001', 'Taxa de rede (MCNet) - Network tax', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B002', 'Doc. dB0 transporte - Transport doc.', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B003', 'Depositos - Deposits', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B004', 'Armazenagem/parqueamento - Storages/parking', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B005', 'Scaner(Kudumba) - Scanner', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B006', 'Matriculas(INATTER) - Registration number', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B007', 'Aprovação de modelo(INATTER) - Model aproval', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B008', 'Aprovação de marca(INATTER) - Make aproval', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B009', 'Licenças - Licences', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B010', 'Taxa de cais - Port tax', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B011', 'Manuseio de carga - Load handling', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('B012', 'Outros pagamentos a entidades - Other payments to companies', 0.00, 'B');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C001', 'Documentação - Documentation', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C002', 'Fotoópias - photocopies', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C003', 'Deslocações - Movements', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C004', 'Expediente e impressos - Expedient and printed matter', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C005', 'Comunicações - Communications', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C006', 'Honorarios - Clearance tax', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C007', 'Isenções - Exeptions', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C008', 'Lista global - Global list', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C009', 'Taxas de serviço - Service tax', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C010', 'Taxa de entrega de carga - Goods handling tax', 16.00, 'C');
          INSERT INTO artigo ("codigo", "descricao", "taxa_iva", "tipo") VALUES ('C011', 'Diversos honoraios - other clearance tax', 16.00, 'C');          
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
                      DELETE FROM public.artigo;
                  `);
  }
}
