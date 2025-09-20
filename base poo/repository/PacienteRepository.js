"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteRepository = void 0;
const Paciente_1 = require("../entity/Paciente");
const banco_1 = require("../banco");
class PacienteRepository {
    constructor() {
        this.repositorio = banco_1.banco.getRepository(Paciente_1.Paciente);
    }
    async criar(paciente) {
        return await this.repositorio.save(paciente);
    }
    async listar() {
        return await this.repositorio.find();
    }
    async buscarPorId(id) {
        return await this.repositorio.findOneBy({ id });
    }
    async atualizar(paciente) {
        return await this.repositorio.save(paciente);
    }
    async remover(id) {
        await this.repositorio.delete(id);
    }
}
exports.PacienteRepository = PacienteRepository;
