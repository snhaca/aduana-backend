import { Test, TestingModule } from '@nestjs/testing';
import { ColaboradorContatoService } from './colaborador_contato.service';

describe('ColaboradorContatoService', () => {
  let service: ColaboradorContatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColaboradorContatoService],
    }).compile();

    service = module.get<ColaboradorContatoService>(ColaboradorContatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
