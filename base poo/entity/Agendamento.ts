import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Paciente } from "./Paciente";
import { Exame } from "./Exame";
import { Medico } from "./Medico";
import { Consulta } from "./Consulta";

@Entity()
export class Agendamento {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => Paciente)
    @JoinColumn()
    paciente?: Paciente;

    @ManyToOne(() => Consulta)
    @JoinColumn()
    consulta?: Consulta;

    @ManyToOne(() => Exame)
    @JoinColumn()
    exame?: Exame;

    @ManyToOne(() => Medico)
    @JoinColumn()
    medico?: Medico;

    @Column()
    data_agendamento: Date;

    @Column()
    sala: string;

    @Column()
    status: string;

    constructor( paciente: Paciente, consulta: Consulta, exame: Exame, medico: Medico, data_agendamento: Date, sala: string, status: string) {
        this.paciente = paciente;
        this.consulta = consulta;
        this.exame = exame;
        this.medico = medico;
        this.data_agendamento = data_agendamento;
        this.sala = sala;
        this.status = status;
    }
}
