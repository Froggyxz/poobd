"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExameController = void 0;
const ExameService_1 = require("../service/ExameService");
class ExameController {
    constructor() {
        this.exameService = new ExameService_1.ExameService();
    }
    async criar(req, res) {
        try {
            const { id, nome, codigo, especialidade_requerida, valor } = req.body;
            const novo = await this.exameService.criar(id, nome, codigo, especialidade_requerida, valor);
            return res.status(201).json(novo);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao criar exame.', error: error.message });
        }
    }
    async listar(req, res) {
        try {
            const lista = await this.exameService.listarTodos();
            return res.status(200).json(lista);
        }
        catch (error) {
            return res.status(500).json({ message: 'Erro ao listar exames.', error: error.message });
        }
    }
    async buscar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.exameService.buscar(id);
            return res.status(200).json(registro);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao buscar exame.', error: error.message });
        }
    }
    async atualizar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { nome, codigo, especialidade_requerida, valor } = req.body;
            const novo = await this.exameService.atualizar(id, nome, codigo, especialidade_requerida, valor);
            return res.status(201).json(novo);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao atualizar exame.', error: error.message });
        }
    }
    async remover(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.exameService.excluir(id);
            return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao remover exame.', error: error.message });
        }
    }
}
exports.ExameController = ExameController;
