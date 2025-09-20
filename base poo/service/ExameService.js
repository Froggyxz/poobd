"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExameService = void 0;
const Exame_1 = require("../entity/Exame");
const ExameRepository_1 = require("../repository/ExameRepository");
class ExameService {
    constructor() {
        this.repository = new ExameRepository_1.ExameRepository();
    }
    async criar(id, nome, codigo, especialidade_requerida, valor) {
        const exame = new Exame_1.Exame(id, nome, codigo, especialidade_requerida, valor);
        return await this.repository.criar(exame);
    }
    async listarTodos() {
        return await this.repository.listar();
    }
    async buscar(id) {
        return await this.repository.buscarPorId(id);
    }
    async atualizar(id, nome, codigo, especialidade_requerida, valor) {
        const exame = await this.repository.buscarPorId(id);
        if (!exame)
            throw new Error("Exame não encontrado");
        if (nome !== undefined)
            exame.nome = nome;
        if (codigo !== undefined)
            exame.codigo = codigo;
        if (especialidade_requerida !== undefined)
            exame.especialidade_requerida = especialidade_requerida;
        if (valor !== undefined)
            exame.valor = valor;
        return await this.repository.atualizar(exame);
    }
    async excluir(id) {
        return await this.repository.remover(id);
    }
}
exports.ExameService = ExameService;
