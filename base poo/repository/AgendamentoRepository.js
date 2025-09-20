"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentoRepository = void 0;
const Agendamento_1 = require("../entity/Agendamento");
const banco_1 = require("../banco");
class AgendamentoRepository {
    constructor() {
        this.repositorio = banco_1.banco.getRepository(Agendamento_1.Agendamento);
    }
    async criar(agendamento) {
        return await this.repositorio.save(agendamento);
    }
    async listar() {
        return await this.repositorio.find({
            relations: ["paciente", "consulta", "exame", "medico"]
        });
    }
    async buscarPorId(id) {
        return await this.repositorio.findOne({
            where: { id },
            relations: ["paciente", "consulta", "exame", "medico"]
        });
    }
    async atualizar(agendamento) {
        return await this.repositorio.save(agendamento);
    }
    async remover(id) {
        await this.repositorio.delete(id);
    }
}
exports.AgendamentoRepository = AgendamentoRepository;
