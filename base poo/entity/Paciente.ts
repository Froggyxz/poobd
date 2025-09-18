import { Entity, PrimaryGeneratedColumn,JoinColumn, OneToOne} from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity()
export class Paciente extends Pessoa {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToOne(() => Pessoa)
    @JoinColumn()
    pessoa?: Pessoa

    constructor(nome: string, cpf: string, data_nascimento: Date) {
        super(nome, cpf, data_nascimento);
    }
    
}
