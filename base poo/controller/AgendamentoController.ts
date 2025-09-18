import { Request, Response } from 'express';
import { AgendamentoService } from '../service/AgendamentoService';

export class AgendamentoController {
  private agendamentoService: AgendamentoService;

  constructor() {
    this.agendamentoService = new AgendamentoService();
  }

  async criar(req: Request, res: Response): Promise<Response> {
    try {
      const {id, paciente, consulta, exame, medico, data_agendamento, sala, status } = req.body;
      const novo = await this.agendamentoService.criar(id,paciente, consulta, exame, medico, new Date(data_agendamento), sala, status);
      return res.status(201).json(novo);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao criar agendamento.', error: error.message });
    }
  }

  async listar(req: Request, res: Response): Promise<Response> {
    try {
      const lista = await this.agendamentoService.listarTodos();
      return res.status(200).json(lista);
    } catch (error: any) {
      return res.status(500).json({ message: 'Erro ao listar agendamentos.', error: error.message });
    }
  }

  async buscar(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const registro = await this.agendamentoService.buscar(id);
      return res.status(200).json(registro);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao buscar agendamento.', error: error.message });
    }
  }

  async atualizar(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const { paciente, consulta, exame, medico, data_agendamento, sala, status } = req.body;
      const novo = await this.agendamentoService.atualizar(id, paciente, consulta, exame, medico, new Date(data_agendamento), sala, status);
      return res.status(201).json(novo);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao atualizar agendamento.', error: error.message });
    }
  }

  async remover(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const registro = await this.agendamentoService.excluir(id);
      return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao remover agendamento.', error: error.message });
    }
  }
}
