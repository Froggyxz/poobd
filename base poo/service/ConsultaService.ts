import { Consulta } from "../entity/Consulta";
import { Medico } from "../entity/Medico";
import { Paciente } from "../entity/Paciente";
import { ConsultaRepository } from "../repository/ConsultaRepository";

export class ConsultaService {
    private repository: ConsultaRepository;

    constructor() {
        this.repository = new ConsultaRepository();
    }

    async criar(consulta: Consulta): Promise<Consulta> {
        //const consulta = new Consulta(consulta);
        return await this.repository.criar(consulta);
    }

    async listarTodos(): Promise<Consulta[]> {
        return await this.repository.listar();
    }

    async buscar(id: number): Promise<Consulta | null> {
        return await this.repository.buscarPorId(id);
    }

    async atualizar(id: number, paciente?: Paciente, medico?: Medico, data_consulta?: Date, valor?: number): Promise<Consulta> {
        const consulta = await this.repository.buscarPorId(id);
        if (!consulta) throw new Error("Consulta não encontrada");
        if (paciente !== undefined) consulta.paciente = paciente;
        if (medico !== undefined) consulta.medico = medico;
        if (data_consulta !== undefined) consulta.data_consulta = data_consulta;
        if (valor !== undefined) consulta.valor = valor;
        return await this.repository.atualizar(consulta);
    }

    async excluir(id: number): Promise<void> {
        return await this.repository.remover(id);
    }
}
