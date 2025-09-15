import { Request, Response } from 'express';
import { MusicaService } from '../service/MusicaService';

export class MusicaController {
    private musicaService: MusicaService;

    constructor() {
        this.musicaService = new MusicaService();
    }

    async criar(req: Request, res: Response): Promise<Response> {
        try {
            const novo = await this.musicaService.cadastrar(req.body.nome, req.body.duracao);
            return res.status(201).json(novo);
        } catch (error: any) {
            return res.status(400).json({ message: 'Erro ao criar musica.', error: error.message });
        }
    }

    async listar(req: Request, res: Response): Promise<Response> {
        try {
            const lista = await this.musicaService.listarTodos();
            return res.status(200).json(lista);
        } catch (error: any) {
            return res.status(500).json({ message: 'Erro ao listar musicas.', error: error.message });
        }
    }

    async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            const id:number = parseInt(req.params.id);
            const novo = await this.musicaService.atualizar(id, req.body.nome, req.body.duracao);
            return res.status(201).json(novo);
        } catch (error: any) {
            return res.status(400).json({ message: 'Erro ao criar musica.', error: error.message });
        }
    }


    async remover(req: Request, res: Response): Promise<Response> {
        try {
            const id:number = parseInt(req.params.id);
            const registro = await this.musicaService.excluir(id);
            return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
        } catch (error: any) {
            return res.status(400).json({ message: 'Erro ao remover.', error: error.message });
        }
    }
}
