import { Agendamento } from "../entity/Agendamento";
import { Consulta } from "../entity/Consulta";
import { Exame } from "../entity/Exame";
import { Medico } from "../entity/Medico";
import { Paciente } from "../entity/Paciente";
import { AgendamentoRepository } from "../repository/AgendamentoRepository";

export class AgendamentoService {
    private repository: AgendamentoRepository;

    constructor() {
        this.repository = new AgendamentoRepository();
    }

    async criar(id: number, paciente: Paciente, consulta: Consulta, exame: Exame, medico: Medico, data_agendamento: Date, sala: string, status: string): Promise<Agendamento> {
        const agendamento = new Agendamento(paciente, consulta, exame, medico, data_agendamento, sala, status);
        return await this.repository.criar(agendamento);
    }

    async listarTodos(): Promise<Agendamento[]> {
        return await this.repository.listar();
    }

    async listarTodosFormatado(): Promise<Agendamento[]> {
        return await this.repository.listarFormatado();
    }

    async buscar(id: number): Promise<Agendamento | null> {
        return await this.repository.buscarPorId(id);
    }

    async atualizar(id: number, paciente?: Paciente, consulta?: Consulta, exame?: Exame, medico?: Medico, data_agendamento?: Date, sala?: string, status?: string): Promise<Agendamento> {
        const agendamento = await this.repository.buscarPorId(id);
        if (!agendamento) throw new Error("Agendamento não encontrado");
        if (paciente !== undefined) agendamento.paciente = paciente;
        if (consulta !== undefined) agendamento.consulta = consulta;
        if (exame !== undefined) agendamento.exame = exame;
        if (medico !== undefined) agendamento.medico = medico;
        if (data_agendamento !== undefined) agendamento.data_agendamento = data_agendamento;
        if (sala !== undefined) agendamento.sala = sala;
        if (status !== undefined) agendamento.status = status;
        return await this.repository.atualizar(agendamento);
    }

    async excluir(id: number): Promise<void> {
        return await this.repository.remover(id);
    }
}
