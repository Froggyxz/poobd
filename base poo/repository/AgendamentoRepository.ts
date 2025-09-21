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
            relations: ["paciente", "consulta", "consulta.paciente", "consulta.medico", "exame", "medico"],
        });
    }

    async buscarPorId(id: number): Promise<Agendamento | null> {
        return await this.repositorio.findOne({
            where: { id },
            relations: ["paciente", "consulta", "consulta.paciente", "consulta.medico", "exame", "medico"],
        });
    }

    async atualizar(agendamento: Agendamento): Promise<Agendamento> {
        return await this.repositorio.save(agendamento);
    }

    async remover(id: number): Promise<void> {
        await this.repositorio.delete(id);
    }

    async listarFormatado(): Promise<any[]> {
        const agendamentos = await this.listar();
        return agendamentos.map(agendamento => ({
            id: agendamento.id,
            paciente: agendamento.paciente?.getNome(),
            consulta: {
                id: agendamento.consulta?.id,
                paciente: agendamento.consulta?.paciente?.getNome(),
                medico: agendamento.consulta?.medico?.getNome(),
                data_consulta: agendamento.consulta?.data_consulta,
                valor: agendamento.consulta?.valor
            },
            exame: {
                nome: agendamento.exame?.nome,
                codigo: agendamento.exame?.codigo,
                especialidade: agendamento.exame?.especialidade_requerida,
                valor: agendamento.exame?.valor
            },
            medico: agendamento.medico?.getNome(),
            data_agendamento: agendamento.data_agendamento,
            sala: agendamento.sala,
            status: agendamento.status
        }));
    }
}
