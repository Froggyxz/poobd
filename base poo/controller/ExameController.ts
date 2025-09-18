import { Request, Response } from "express";
import { ExameService } from "../service/ExameService";


export class ExameController {
  private exameService: ExameService;

  constructor() {
    this.exameService = new ExameService();
  }

  async criar(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, codigo, especialidade_requerida, valor } = req.body;
      const novo = await this.exameService.cadastrar(nome, codigo, especialidade_requerida, valor);
      return res.status(201).json(novo);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao criar exame.', error: error.message });
    }
  }

  async listar(req: Request, res: Response): Promise<Response> {
    try {
      const lista = await this.exameService.listarTodos();
      return res.status(200).json(lista);
    } catch (error: any) {
      return res.status(500).json({ message: 'Erro ao listar exames.', error: error.message });
    }
  }

  async buscar(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const registro = await this.exameService.buscar(id);
      return res.status(200).json(registro);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao buscar exame.', error: error.message });
    }
  }

  async atualizar(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const { nome, codigo, especialidade_requerida, valor } = req.body;
      const novo = await this.exameService.atualizar(id, nome, codigo, especialidade_requerida, valor);
      return res.status(201).json(novo);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao atualizar exame.', error: error.message });
    }
  }

  async remover(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const registro = await this.exameService.excluir(id);
      return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao remover exame.', error: error.message });
    }
  }
}
