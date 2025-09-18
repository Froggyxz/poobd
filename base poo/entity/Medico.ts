import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity()
export class Medico extends Pessoa {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "crm", unique: true })
    crm: string;

    @Column({ name: "especialidade" })
    especialidade: string;

    constructor(nome: string, cpf: string, data_nascimento: Date, crm: string, especialidade: string) {
        super(nome, cpf, data_nascimento);
        this.crm = crm;
        this.especialidade = especialidade;
    }
}
