import { Entity, PrimaryColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity()
export class Paciente extends Pessoa {
    @PrimaryGeneratedColumn()
    id!: number;

    constructor(nome: string, cpf: string, data_nascimento: Date) {
        super(nome, cpf, data_nascimento);
    }
}
