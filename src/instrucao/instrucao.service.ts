import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instrucao } from './entities/instrucao.entity';
import { UpdateInstrucao } from './dto/update-instrucao.dto';
import { CreateInstrucaoDto } from './dto/create-instrucao.dto';
import { Repository } from 'typeorm';

@Injectable()
export class InstrucaoService {
  constructor(
    @InjectRepository(Instrucao)
    private readonly instrucaoRepository: Repository<Instrucao>,
    // private readonly clienteService: ClienteService,
    // private readonly importService: ImportadorService,
    // private readonly exportService: ExportadorService,
    // private readonly regimeeService: RegimeAduaneiroService,
    // private readonly servicoService: ServicoService,
    // private readonly moedaService: MoedaService,
    // private readonly terminalService: TerminalService,
    // private readonly transpService: TransporteService,
  ) {}

  async create(create: CreateInstrucaoDto): Promise<Instrucao> {
    // await this.clienteService.findOne(create.idPessoa);
    // await this.exportService.findOne(create.idCidade);

    const numeroz = (await this.instrucaoRepository.count()) + 1;
    const data = new Date();
    const ano = data.getFullYear();

    return this.instrucaoRepository.save({
      ...create,
      numero: numeroz,
      ano,
    });
  }

  async findAll(): Promise<Instrucao[]> {
    const instrucoes = await this.instrucaoRepository.find();

    if (!instrucoes || instrucoes.length === 0) {
      throw new NotFoundException('Sem dados para mostrar');
    }

    return instrucoes;
  }

  async findOne(id: number): Promise<Instrucao> {
    const instrucao = await this.instrucaoRepository.findOne({
      where: {
        id,
      },
    });

    if (!instrucao) {
      throw new NotFoundException(`Id Instrução: ${id} não encontrado`);
    }

    return instrucao;
  }

  async findOneUsingRelations(id: number): Promise<Instrucao> {
    const instrucao = await this.instrucaoRepository.findOne({
      where: {
        id,
      },
      relations: {
        cliente: true,
        exportador: true,
        importador: true,
        moeda: true,
        regime: true,
        servico: true,
        terminal: true,
        transporte: true,
        controlos: true,
        docRecebidos: true,
        despesas: true,
      },
    });

    if (!instrucao) {
      throw new NotFoundException(`Id Instrução: ${id} não encontrado`);
    }

    return instrucao;
  }

  // async delete(id: number): Promise<DeleteResult> {
  //   await this.findOne(id);

  //   return this.instrucaoRepository.delete(id);
  // }

  async delete(id: number) {
    const instrucao = await this.findOne(id);
    if (!instrucao || instrucao === null) {
      throw new NotFoundException('User Not Found');
    } else {
      this.instrucaoRepository.remove(instrucao);
      return 'Successfully deleted';
    }
  }

  async update(update: UpdateInstrucao, id: number): Promise<Instrucao> {
    const instrucao = await this.findOne(id);

    return this.instrucaoRepository.save({
      ...instrucao,
      ...update,
    });
  }
}
