"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExameRepository = void 0;
const Exame_1 = require("../entity/Exame");
const banco_1 = require("../banco");
class ExameRepository {
    constructor() {
        this.repositorio = banco_1.banco.getRepository(Exame_1.Exame);
    }
    async criar(exame) {
        return await this.repositorio.save(exame);
    }
    async listar() {
        return await this.repositorio.find();
    }
    async buscarPorId(id) {
        return await this.repositorio.findOneBy({ id });
    }
    async atualizar(exame) {
        return await this.repositorio.save(exame);
    }
    async remover(id) {
        await this.repositorio.delete(id);
    }
}
exports.ExameRepository = ExameRepository;
