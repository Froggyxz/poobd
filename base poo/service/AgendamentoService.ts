import { Agendamento } from "../entity/Agendamento";
import { AgendamentoRepository } from "../repository/AgendamentoRepository";

export class AgendamentoService {
    private repository: AgendamentoRepository;

    constructor() {
        this.repository = new AgendamentoRepository();
    }

    async cadastrar(id: number, paciente: any, consulta: any, exame: any, medico: any, data_agendamento: Date, sala: string, status: string): Promise<Agendamento> {
        const agendamento = new Agendamento(id, paciente, consulta, exame, medico, data_agendamento, sala, status);
        return await this.repository.criar(agendamento);
    }

    async listarTodos(): Promise<Agendamento[]> {
        return await this.repository.listar();
    }

    async buscar(id: number): Promise<Agendamento | null> {
        return await this.repository.buscarPorId(id);
    }

    async atualizar(id: number, paciente?: any, consulta?: any, exame?: any, medico?: any, data_agendamento?: Date, sala?: string, status?: string): Promise<Agendamento> {
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
