import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Paciente } from "./Paciente";
import { Medico } from "./Medico";

@Entity()
export class Consulta {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => Paciente)
    @JoinColumn()
    paciente?: Paciente;

    @ManyToOne(() => Medico)
    @JoinColumn()
    medico?: Medico;

    @Column()
    data_consulta?: Date;

    @Column()
    valor?: number;

    constructor(id: number, paciente: Paciente, medico: Medico, data_consulta: Date, valor: number) {
        this.id = id;
        this.paciente = paciente;
        this.medico = medico;
        this.data_consulta = data_consulta;
        this.valor = valor;
    }
}
