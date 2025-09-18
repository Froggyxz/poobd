import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { PrimaryColumn } from "typeorm";

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "cpf", unique: true })
    cpf: string;

    @Column({ name: "data_nascimento" })
    data_nascimento: Date;

    @Column({ name: "nome" })
    nome: string;

    constructor(nome: string, cpf: string, data_nascimento: Date) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }
}
