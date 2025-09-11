import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Musica {
    @PrimaryGeneratedColumn()
    private _id!: number;

    @Column({ name: "nome" })
    private _nome: string;

    @Column({ name: "duracao" })
    private _duracao: number;

    constructor(nome: string, duracao: number) {
        this._nome = nome;
        this._duracao = duracao;
    }

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        if (!nome) throw new Error("Nome não pode ser vazio.");
        this._nome = nome;
    }

    get duracao(): number {
        return this._duracao;
    }

    set duracao(duracao: number) {
        if (duracao <= 0) throw new Error("Duração deve ser positiva.");
        this._duracao = duracao;
    }
}