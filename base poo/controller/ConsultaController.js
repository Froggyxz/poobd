"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaController = void 0;
const ConsultaService_1 = require("../service/ConsultaService");
class ConsultaController {
    constructor() {
        this.consultaService = new ConsultaService_1.ConsultaService();
    }
    async criar(req, res) {
        try {
            const consulta = req.body;
            const novaConsulta = await this.consultaService.criar(consulta);
            return res.status(201).json(novaConsulta);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao criar consulta.', error: error.message });
        }
    }
    async listar(req, res) {
        try {
            const lista = await this.consultaService.listarTodos();
            return res.status(200).json(lista);
        }
        catch (error) {
            return res.status(500).json({ message: 'Erro ao listar consultas.', error: error.message });
        }
    }
    async buscar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.consultaService.buscar(id);
            return res.status(200).json(registro);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao buscar consulta.', error: error.message });
        }
    }
    async atualizar(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { paciente, medico, data_consulta, valor } = req.body;
            const novo = await this.consultaService.atualizar(id, paciente, medico, new Date(data_consulta), valor);
            return res.status(201).json(novo);
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao atualizar consulta.', error: error.message });
        }
    }
    async remover(req, res) {
        try {
            const id = parseInt(req.params.id);
            const registro = await this.consultaService.excluir(id);
            return res.status(200).json({ message: `ID ${id} removido com sucesso.`, registro });
        }
        catch (error) {
            return res.status(400).json({ message: 'Erro ao remover consulta.', error: error.message });
        }
    }
}
exports.ConsultaController = ConsultaController;
