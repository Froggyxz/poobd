"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaRepository = void 0;
const Consulta_1 = require("../entity/Consulta");
const banco_1 = require("../banco");
class ConsultaRepository {
    constructor() {
        this.repositorio = banco_1.banco.getRepository(Consulta_1.Consulta);
    }
    async criar(consulta) {
        return await this.repositorio.save(consulta);
    }
    async listar() {
        return await this.repositorio.find({ relations: ["paciente", "medico"] });
    }
    async buscarPorId(id) {
        return await this.repositorio.findOne({ where: { id }, relations: ["paciente", "medico"] });
    }
    async atualizar(consulta) {
        return await this.repositorio.save(consulta);
    }
    async remover(id) {
        await this.repositorio.delete(id);
    }
}
exports.ConsultaRepository = ConsultaRepository;
