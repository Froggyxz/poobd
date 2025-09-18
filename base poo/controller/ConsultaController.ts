import { Request, Response } from "express";
import { ConsultaService } from "../service/ConsultaService";
import { Consulta } from "../entity/Consulta";


export class ConsultaController {
  private consultaService: ConsultaService;

  constructor() {
    this.consultaService = new ConsultaService();
  }

  async criar(req: Request, res: Response): Promise<Response> {
    try {
      const consulta: Consulta = req.body;
      const novaConsulta = await this.consultaService.criar(consulta);
      
      return res.status(201).json(novaConsulta);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao criar consulta.', error: error.message });
    }
  }

  async listar(req: Request, res: Response): Promise<Response> {
    try {
      const lista = await this.consultaService.listarTodos();
      return res.status(200).json(lista);
    } catch (error: any) {
      return res.status(500).json({ message: 'Erro ao listar consultas.', error: error.message });
    }
  }

  async buscar(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const registro = await this.consultaService.buscar(id);
      return res.status(200).json(registro);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao buscar consulta.', error: error.message });
    }
  }

  async atualizar(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const { paciente, medico, data_consulta, valor } = req.body;
      const novo = await this.consultaService.atualizar(id, paciente, medico, new Date(data_consulta), valor);
      return res.status(201).json(novo);
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao atualizar consulta.', error: error.message });
    }
  }

  async remover(req: Request, res: Response): Promise<Response> {
    try {
      const id:number = parseInt(req.params.id);
      const registro = await this.consultaService.excluir(id);
      return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
    } catch (error: any) {
      return res.status(400).json({ message: 'Erro ao remover consulta.', error: error.message });
    }
  }
}
