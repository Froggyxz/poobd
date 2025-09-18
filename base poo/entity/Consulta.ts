import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Paciente } from "./Paciente";
import { Medico } from "./Medico";

@Entity()
export class Consulta {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Paciente)
    @JoinColumn({ name: "paciente_id" })
    paciente: Paciente;

    @ManyToOne(() => Medico)
    @JoinColumn({ name: "medico_id" })
    medico: Medico;

    @Column({ name: "data_consulta" })
    data_consulta: Date;

    @Column({ name: "valor" })
    valor: number;

    constructor(paciente: Paciente, medico: Medico, data_consulta: Date, valor: number) {
        this.paciente = paciente;
        this.medico = medico;
        this.data_consulta = data_consulta;
        this.valor = valor;
    }
}
