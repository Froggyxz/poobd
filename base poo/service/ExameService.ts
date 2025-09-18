import { Exame } from "../entity/Exame";
import { ExameRepository } from "../repository/ExameRepository";

export class ExameService {
    private repository: ExameRepository;

    constructor() {
        this.repository = new ExameRepository();
    }

    async criar(id: number, nome: string, codigo: string, especialidade_requerida: string, valor: number): Promise<Exame> {
        const exame = new Exame(id, nome, codigo, especialidade_requerida, valor);
        return await this.repository.criar(exame);
    }

    async listarTodos(): Promise<Exame[]> {
        return await this.repository.listar();
    }

    async buscar(id: number): Promise<Exame | null> {
        return await this.repository.buscarPorId(id);
    }

    async atualizar(id: number, nome?: string, codigo?: string, especialidade_requerida?: string, valor?: number): Promise<Exame> {
        const exame = await this.repository.buscarPorId(id);
        if (!exame) throw new Error("Exame não encontrado");
        if (nome !== undefined) exame.nome = nome;
        if (codigo !== undefined) exame.codigo = codigo;
        if (especialidade_requerida !== undefined) exame.especialidade_requerida = especialidade_requerida;
        if (valor !== undefined) exame.valor = valor;
        return await this.repository.atualizar(exame);
    }

    async excluir(id: number): Promise<void> {
        return await this.repository.remover(id);
    }
}
