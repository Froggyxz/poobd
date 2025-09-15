import { Repository } from "typeorm";
import { Exame } from "../entity/Exame";
import { banco } from "../banco";

export class ExameRepository {
    private repositorio: Repository<Exame>;

    constructor() {
        this.repositorio = banco.getRepository(Exame);
    }

    async criar(exame: Exame): Promise<Exame> {
        return await this.repositorio.save(exame);
    }

    async listar(): Promise<Exame[]> {
        return await this.repositorio.find();
    }

    async buscarPorId(id: number): Promise<Exame | null> {
        return await this.repositorio.findOneBy({ id });
    }

    async atualizar(exame: Exame): Promise<Exame> {
        return await this.repositorio.save(exame);
    }

    async remover(id: number): Promise<void> {
        await this.repositorio.delete(id);
    }
}
