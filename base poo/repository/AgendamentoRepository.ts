import { Repository } from "typeorm";
import { Agendamento } from "../entity/Agendamento";
import { banco } from "../banco";

export class AgendamentoRepository {
    private repositorio: Repository<Agendamento>;

    constructor() {
        this.repositorio = banco.getRepository(Agendamento);
    }

    async criar(agendamento: Agendamento): Promise<Agendamento> {
        return await this.repositorio.save(agendamento);
    }

    async listar(): Promise<Agendamento[]> {
        return await this.repositorio.find({
            relations: {
                paciente: true,
                consulta: {
                    paciente: true,
                    medico: true
                },
                exame: true,
                medico: true
            }
        });
    }

    async buscarPorId(id: number): Promise<Agendamento | null> {
        return await this.repositorio.findOne({
            where: { id },
            relations: {
                paciente: true,
                consulta: {
                    paciente: true,
                    medico: true
                },
                exame: true,
                medico: true
            }
        });
    }

    async atualizar(agendamento: Agendamento): Promise<Agendamento> {
        return await this.repositorio.save(agendamento);
    }

    async remover(id: number): Promise<void> {
        await this.repositorio.delete(id);
    }
}
