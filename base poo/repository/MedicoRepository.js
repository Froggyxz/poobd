"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoRepository = void 0;
const Medico_1 = require("../entity/Medico");
const banco_1 = require("../banco");
class MedicoRepository {
    constructor() {
        this.repositorio = banco_1.banco.getRepository(Medico_1.Medico);
    }
    async criar(medico) {
        return await this.repositorio.save(medico);
    }
    async listar() {
        return await this.repositorio.find();
    }
    async buscarPorId(id) {
        return await this.repositorio.findOneBy({ id });
    }
    async atualizar(medico) {
        return await this.repositorio.save(medico);
    }
    async remover(id) {
        await this.repositorio.delete(id);
    }
}
exports.MedicoRepository = MedicoRepository;
