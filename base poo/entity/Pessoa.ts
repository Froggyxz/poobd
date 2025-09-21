import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    cpf: string;

    @Column()
    data_nascimento: Date;

    @Column()
    nome: string;

    constructor(nome: string, cpf: string, data_nascimento: Date) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }

    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getDataNascimento(): Date {
        return this.data_nascimento;
    }
}
