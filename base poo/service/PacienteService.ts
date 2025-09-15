import { Paciente } from "../entity/Paciente";
import { PacienteRepository } from "../repository/PacienteRepository";

export class PacienteService {
    private repository: PacienteRepository;

    constructor() {
        this.repository = new PacienteRepository();
    }

    async cadastrar(nome: string, cpf: string, data_nascimento: Date): Promise<Paciente> {
        const paciente = new Paciente(nome, cpf, data_nascimento);
        return await this.repository.criar(paciente);
    }

    async listarTodos(): Promise<Paciente[]> {
        return await this.repository.listar();
    }

    async buscar(id: number): Promise<Paciente | null> {
        return await this.repository.buscarPorId(id);
    }

    async atualizar(id: number, nome?: string, cpf?: string, data_nascimento?: Date): Promise<Paciente> {
        const paciente = await this.repository.buscarPorId(id);
        if (!paciente) throw new Error("Paciente não encontrado");
        if (nome !== undefined) paciente.nome = nome;
        if (cpf !== undefined) paciente.cpf = cpf;
        if (data_nascimento !== undefined) paciente.data_nascimento = data_nascimento;
        return await this.repository.atualizar(paciente);
    }

    async excluir(id: number): Promise<void> {
        return await this.repository.remover(id);
    }
}
