import { Repository } from "typeorm";
import { Paciente } from "../entity/Paciente";
import { banco } from "../banco";

export class PacienteRepository {
    private repositorio: Repository<Paciente>;

    constructor() {
        this.repositorio = banco.getRepository(Paciente);
    }

    async criar(paciente: Paciente): Promise<Paciente> {
        return await this.repositorio.save(paciente);
    }

    async listar(): Promise<Paciente[]> {
        return await this.repositorio.find();
    }

    async buscarPorId(id: number): Promise<Paciente | null> {
        return await this.repositorio.findOneBy({ id });
    }

    async atualizar(paciente: Paciente): Promise<Paciente> {
        return await this.repositorio.save(paciente);
    }

    async remover(id: number): Promise<void> {
        await this.repositorio.delete(id);
    }
}
