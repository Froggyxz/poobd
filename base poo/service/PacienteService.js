"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteService = void 0;
const Paciente_1 = require("../entity/Paciente");
const PacienteRepository_1 = require("../repository/PacienteRepository");
class PacienteService {
    constructor() {
        this.repository = new PacienteRepository_1.PacienteRepository();
    }
    async criar(nome, cpf, data_nascimento) {
        const paciente = new Paciente_1.Paciente(nome, cpf, data_nascimento);
        return await this.repository.criar(paciente);
    }
    async listarTodos() {
        return await this.repository.listar();
    }
    async buscar(id) {
        return await this.repository.buscarPorId(id);
    }
    async atualizar(id, nome, cpf, data_nascimento) {
        const paciente = await this.repository.buscarPorId(id);
        if (!paciente)
            throw new Error("Paciente não encontrado");
        if (nome !== undefined)
            paciente.nome = nome;
        if (cpf !== undefined)
            paciente.cpf = cpf;
        if (data_nascimento !== undefined)
            paciente.data_nascimento = data_nascimento;
        return await this.repository.atualizar(paciente);
    }
    async excluir(id) {
        return await this.repository.remover(id);
    }
}
exports.PacienteService = PacienteService;
