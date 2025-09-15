import { Medico } from "../entity/Medico";
import { MedicoRepository } from "../repository/MedicoRepository";

export class MedicoService {
    private repository: MedicoRepository;

    constructor() {
        this.repository = new MedicoRepository();
    }

    async cadastrar(nome: string, crm: string, especialidade: string): Promise<Medico> {
        const medico = new Medico(nome, crm, especialidade);
        return await this.repository.criar(medico);
    }

    async listarTodos(): Promise<Medico[]> {
        return await this.repository.listar();
    }

    async buscar(id: number): Promise<Medico | null> {
        return await this.repository.buscarPorId(id);
    }

    async atualizar(id: number, nome?: string, crm?: string, especialidade?: string): Promise<Medico> {
        const medico = await this.repository.buscarPorId(id);
        if (!medico) throw new Error("Médico não encontrado");
        if (nome !== undefined) medico.nome = nome;
        if (crm !== undefined) medico.crm = crm;
        if (especialidade !== undefined) medico.especialidade = especialidade;
        return await this.repository.atualizar(medico);
    }

    async excluir(id: number): Promise<void> {
        return await this.repository.remover(id);
    }
}
