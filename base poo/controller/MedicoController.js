"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoController = void 0;
const MedicoService_1 = require("../service/MedicoService");
class MedicoController {
    constructor() {
        this.medicoService = new MedicoService_1.MedicoService();
    }
    async criar(req, res) {
        try {
            const { id, nome, cpf, data_nascimento, crm, especialidade } = req.body;
            const novo = await this.medicoService.criar(id, nome, cpf, new Date(data_nascimento), crm, especialidade);
            return res.status(201).json(novo);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao criar médico.', error: error.message });
        }
    }
    async listar(req, res) {
        try {
            const lista = await this.medicoService.listarTodos();
            return res.status(200).json(lista);
        }
        catch (error) {
            return res.status(500).json({ message: 'Erro ao listar médicos.', error: error.message });
        }
    }
    async buscar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.medicoService.buscar(id);
            return res.status(200).json(registro);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao buscar médico.', error: error.message });
        }
    }
    async atualizar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { nome, cpf, data_nascimento, crm, especialidade } = req.body;
            const novo = await this.medicoService.atualizar(id, nome, cpf, new Date(data_nascimento), crm, especialidade);
            return res.status(201).json(novo);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao atualizar médico.', error: error.message });
        }
    }
    async remover(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.medicoService.excluir(id);
            return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao remover médico.', error: error.message });
        }
    }
}
exports.MedicoController = MedicoController;
