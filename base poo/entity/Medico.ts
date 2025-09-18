import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity()
export class Medico extends Pessoa {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToOne(() => Pessoa)
    @JoinColumn()
    pessoa?: Pessoa

    @Column()
    crm: string;

    @Column()
    especialidade: string;

    constructor(nome: string, cpf: string, data_nascimento: Date, crm: string, especialidade: string) {
        super(nome, cpf, data_nascimento);
        this.crm = crm;
        this.especialidade = especialidade;
    }
    
}
