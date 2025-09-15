import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Medico {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "nome" })
    nome: string;

    @Column({ name: "crm", unique: true })
    crm: string;

    @Column({ name: "especialidade" })
    especialidade: string;

    constructor(nome: string, crm: string, especialidade: string) {
        this.nome = nome;
        this.crm = crm;
        this.especialidade = especialidade;
    }
}
