"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaService = void 0;
const ConsultaRepository_1 = require("../repository/ConsultaRepository");
class ConsultaService {
    constructor() {
        this.repository = new ConsultaRepository_1.ConsultaRepository();
    }
    async criar(consulta) {
        //const consulta = new Consulta(consulta);
        return await this.repository.criar(consulta);
    }
    async listarTodos() {
        return await this.repository.listar();
    }
    async buscar(id) {
        return await this.repository.buscarPorId(id);
    }
    async atualizar(id, paciente, medico, data_consulta, valor) {
        const consulta = await this.repository.buscarPorId(id);
        if (!consulta)
            throw new Error("Consulta não encontrada");
        if (paciente !== undefined)
            consulta.paciente = paciente;
        if (medico !== undefined)
            consulta.medico = medico;
        if (data_consulta !== undefined)
            consulta.data_consulta = data_consulta;
        if (valor !== undefined)
            consulta.valor = valor;
        return await this.repository.atualizar(consulta);
    }
    async excluir(id) {
        return await this.repository.remover(id);
    }
}
exports.ConsultaService = ConsultaService;
