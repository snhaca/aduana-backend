import { Test, TestingModule } from '@nestjs/testing';
import { ColaboradorContatoController } from './colaborador_contato.controller';

describe('ColaboradorContatoController', () => {
  let controller: ColaboradorContatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColaboradorContatoController],
    }).compile();

    controller = module.get<ColaboradorContatoController>(ColaboradorContatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
