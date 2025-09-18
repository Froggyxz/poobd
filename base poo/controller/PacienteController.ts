import { Request, Response } from "express";
import { PacienteService } from "../service/PacienteService";


export class PacienteController {
  private pacienteService: PacienteService;

  constructor() {
    this.pacienteService = new PacienteService();
  }

  async criar(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, cpf, data_nascimento } = req.body;
      const novo = await this.pacienteService.cadastrar(nome, cpf, new Date(data_nascimento));
      return res.status(201).json(novo);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao criar paciente.', error: error.message });
    }
  }

  async listar(req: Request, res: Response): Promise<Response> {
    try {
      const lista = await this.pacienteService.listarTodos();
      return res.status(200).json(lista);
    } catch (error: any) {
      return res.status(500).json({ message: 'Erro ao listar pacientes.', error: error.message });
    }
  }

  async buscar(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const registro = await this.pacienteService.buscar(id);
      return res.status(200).json(registro);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao buscar paciente.', error: error.message });
    }
  }

  async atualizar(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const { nome, cpf, data_nascimento } = req.body;
      const novo = await this.pacienteService.atualizar(id, nome, cpf, new Date(data_nascimento));
      return res.status(201).json(novo);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao atualizar paciente.', error: error.message });
    }
  }

  async remover(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const registro = await this.pacienteService.excluir(id);
      return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao remover paciente.', error: error.message });
    }
  }
}
