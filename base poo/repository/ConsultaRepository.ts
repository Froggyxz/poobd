import { Repository } from "typeorm";
import { Consulta } from "../entity/Consulta";
import { banco } from "../banco";

export class ConsultaRepository {
    private repositorio: Repository<Consulta>;

    constructor() {
        this.repositorio = banco.getRepository(Consulta);
    }

    async criar(consulta: Consulta): Promise<Consulta> {
        return await this.repositorio.save(consulta);
    }

    async listar(): Promise<Consulta[]> {
        return await this.repositorio.find({ relations: ["paciente", "medico"] });
    }

    async buscarPorId(id: number): Promise<Consulta | null> {
        return await this.repositorio.findOne({ where: { id }, relations: ["paciente", "medico"] });
    }

    async atualizar(consulta: Consulta): Promise<Consulta> {
        return await this.repositorio.save(consulta);
    }

    async remover(id: number): Promise<void> {
        await this.repositorio.delete(id);
    }
}
