import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Paciente {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "nome" })
    nome: string;

    @Column({ name: "cpf", unique: true })
    cpf: string;

    @Column({ name: "data_nascimento" })
    data_nascimento: Date;

    constructor(nome: string, cpf: string, data_nascimento: Date) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }
}
