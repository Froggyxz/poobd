import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity()
export class Medico extends Pessoa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    crm: string;

    @Column()
    especialidade: string;

    /*constructor(id: number, nome: string, cpf: string, data_nascimento: Date, crm: string, especialidade: string) {
        super(nome, cpf, data_nascimento);
        this.id = id;
        this.crm = crm;
        this.especialidade = especialidade;
    }
    */
}
