import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Paciente } from "./Paciente";
import { Exame } from "./Exame";
import { Medico } from "./Medico";
import { Consulta } from "./Consulta";

@Entity()
export class Agendamento {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Paciente)
    @JoinColumn({ name: "paciente_id" })
    paciente: Paciente;

    @ManyToOne(() => Consulta)
    @JoinColumn({ name: "consulta_id" })
    consulta: Consulta;

    @ManyToOne(() => Exame)
    @JoinColumn({ name: "exame_id" })
    exame: Exame;

    @ManyToOne(() => Medico)
    @JoinColumn({ name: "medico_id" })
    medico: Medico;

    @Column({ name: "data_agendamento" })
    data_agendamento: Date;

    @Column({ name: "sala" })
    sala: string;

    @Column({ name: "status" })
    status: string;

    constructor(paciente: Paciente, consulta: Consulta, exame: Exame, medico: Medico, data_agendamento: Date, sala: string, status: string) {
        this.paciente = paciente;
        this.consulta = consulta;
        this.exame = exame;
        this.medico = medico;
        this.data_agendamento = data_agendamento;
        this.sala = sala;
        this.status = status;
    }
}
