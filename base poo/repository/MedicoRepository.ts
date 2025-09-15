import { Repository } from "typeorm";
import { Medico } from "../entity/Medico";
import { banco } from "../banco";

export class MedicoRepository {
    private repositorio: Repository<Medico>;

    constructor() {
        this.repositorio = banco.getRepository(Medico);
    }

    async criar(medico: Medico): Promise<Medico> {
        return await this.repositorio.save(medico);
    }

    async listar(): Promise<Medico[]> {
        return await this.repositorio.find();
    }

    async buscarPorId(id: number): Promise<Medico | null> {
        return await this.repositorio.findOneBy({ id });
    }

    async atualizar(medico: Medico): Promise<Medico> {
        return await this.repositorio.save(medico);
    }

    async remover(id: number): Promise<void> {
        await this.repositorio.delete(id);
    }
}
