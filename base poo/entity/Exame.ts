import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Exame {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    codigo: string;

    @Column()
    especialidade_requerida: string;

    @Column()
    valor: number;

    constructor(id: number, nome: string, codigo: string, especialidade_requerida: string, valor: number) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.especialidade_requerida = especialidade_requerida;
        this.valor = valor;
    }
}

