"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoService = void 0;
const Medico_1 = require("../entity/Medico");
const MedicoRepository_1 = require("../repository/MedicoRepository");
class MedicoService {
    constructor() {
        this.repository = new MedicoRepository_1.MedicoRepository();
    }
    async criar(id, nome, cpf, data_nascimento, crm, especialidade) {
        const medico = new Medico_1.Medico(nome, cpf, data_nascimento, crm, especialidade);
        return await this.repository.criar(medico);
    }
    async listarTodos() {
        return await this.repository.listar();
    }
    async buscar(id) {
        return await this.repository.buscarPorId(id);
    }
    async atualizar(id, nome, cpf, data_nascimento, crm, especialidade) {
        const medico = await this.repository.buscarPorId(id);
        if (!medico)
            throw new Error("Médico não encontrado");
        if (nome !== undefined)
            medico.nome = nome;
        if (cpf !== undefined)
            medico.cpf = cpf;
        if (data_nascimento !== undefined)
            medico.data_nascimento = data_nascimento;
        if (crm !== undefined)
            medico.crm = crm;
        if (especialidade !== undefined)
            medico.especialidade = especialidade;
        return await this.repository.atualizar(medico);
    }
    async excluir(id) {
        return await this.repository.remover(id);
    }
}
exports.MedicoService = MedicoService;
