"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentoController = void 0;
const AgendamentoService_1 = require("../service/AgendamentoService");
class AgendamentoController {
    constructor() {
        this.agendamentoService = new AgendamentoService_1.AgendamentoService();
    }
    async criar(req, res) {
        try {
            const { id, paciente, consulta, exame, medico, data_agendamento, sala, status } = req.body;
            const novo = await this.agendamentoService.criar(id, paciente, consulta, exame, medico, new Date(data_agendamento), sala, status);
            return res.status(201).json(novo);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao criar agendamento.', error: error.message });
        }
    }
    async listar(req, res) {
        try {
            const lista = await this.agendamentoService.listarTodos();
            return res.status(200).json(lista);
        }
        catch (error) {
            return res.status(500).json({ message: 'Erro ao listar agendamentos.', error: error.message });
        }
    }
    async buscar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.agendamentoService.buscar(id);
            return res.status(200).json(registro);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao buscar agendamento.', error: error.message });
        }
    }
    async atualizar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { paciente, consulta, exame, medico, data_agendamento, sala, status } = req.body;
            const novo = await this.agendamentoService.atualizar(id, paciente, consulta, exame, medico, new Date(data_agendamento), sala, status);
            return res.status(201).json(novo);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao atualizar agendamento.', error: error.message });
        }
    }
    async remover(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.agendamentoService.excluir(id);
            return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao remover agendamento.', error: error.message });
        }
    }
}
exports.AgendamentoController = AgendamentoController;
