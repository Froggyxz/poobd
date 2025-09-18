import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Exame {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "nome" })
    nome: string;

    @Column({ name: "codigo", unique: true })
    codigo: string;

    @Column({ name: "especialidade_requerida" })
    especialidade_requerida: string;

    @Column({ name: "valor" })
    valor: number;

    constructor(nome: string, codigo: string, especialidade_requerida: string, valor: number) {
        this.nome = nome;
        this.codigo = codigo;
        this.especialidade_requerida = especialidade_requerida;
        this.valor = valor;
    }
}
