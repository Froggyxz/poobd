"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentoService = void 0;
const Agendamento_1 = require("../entity/Agendamento");
const AgendamentoRepository_1 = require("../repository/AgendamentoRepository");
class AgendamentoService {
    constructor() {
        this.repository = new AgendamentoRepository_1.AgendamentoRepository();
    }
    async criar(id, paciente, consulta, exame, medico, data_agendamento, sala, status) {
        const agendamento = new Agendamento_1.Agendamento(paciente, consulta, exame, medico, data_agendamento, sala, status);
        return await this.repository.criar(agendamento);
    }
    async listarTodos() {
        return await this.repository.listar();
    }
    async buscar(id) {
        return await this.repository.buscarPorId(id);
    }
    async atualizar(id, paciente, consulta, exame, medico, data_agendamento, sala, status) {
        const agendamento = await this.repository.buscarPorId(id);
        if (!agendamento)
            throw new Error("Agendamento não encontrado");
        if (paciente !== undefined)
            agendamento.paciente = paciente;
        if (consulta !== undefined)
            agendamento.consulta = consulta;
        if (exame !== undefined)
            agendamento.exame = exame;
        if (medico !== undefined)
            agendamento.medico = medico;
        if (data_agendamento !== undefined)
            agendamento.data_agendamento = data_agendamento;
        if (sala !== undefined)
            agendamento.sala = sala;
        if (status !== undefined)
            agendamento.status = status;
        return await this.repository.atualizar(agendamento);
    }
    async excluir(id) {
        return await this.repository.remover(id);
    }
}
exports.AgendamentoService = AgendamentoService;
