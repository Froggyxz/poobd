import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity()
export class Paciente extends Pessoa {
    @PrimaryGeneratedColumn()
    id: number;

    /*constructor(id: number, nome: string, cpf: string, data_nascimento: Date) {
        super(nome, cpf, data_nascimento);
        this.id = id;
    }
    */
}
