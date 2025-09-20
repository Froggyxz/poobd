"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteController = void 0;
const PacienteService_1 = require("../service/PacienteService");
class PacienteController {
    constructor() {
        this.pacienteService = new PacienteService_1.PacienteService();
    }
    async criar(req, res) {
        try {
            const { nome, cpf, data_nascimento } = req.body;
            const novo = await this.pacienteService.criar(nome, cpf, new Date(data_nascimento));
            return res.status(201).json(novo);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao criar paciente.', error: error.message });
        }
    }
    async listar(req, res) {
        try {
            const lista = await this.pacienteService.listarTodos();
            return res.status(200).json(lista);
        }
        catch (error) {
            return res.status(500).json({ message: 'Erro ao listar pacientes.', error: error.message });
        }
    }
    async buscar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.pacienteService.buscar(id);
            return res.status(200).json(registro);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao buscar paciente.', error: error.message });
        }
    }
    async atualizar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { nome, cpf, data_nascimento } = req.body;
            const novo = await this.pacienteService.atualizar(id, nome, cpf, new Date(data_nascimento));
            return res.status(201).json(novo);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao atualizar paciente.', error: error.message });
        }
    }
    async remover(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.pacienteService.excluir(id);
            return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao remover paciente.', error: error.message });
        }
    }
}
exports.PacienteController = PacienteController;
