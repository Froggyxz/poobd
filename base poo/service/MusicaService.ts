import { Musica } from "../entity/Musica";
import { MusicaRepository } from "../repository/MusicaRepository";

export class MusicaService {
  private repository: MusicaRepository;

  constructor() {
    this.repository = new MusicaRepository();
  }

  async cadastrar(nome: string, duracao: number): Promise<Musica> {
    const musica = new Musica(nome, duracao);
    return await this.repository.criar(musica);
  }

  async listarTodos(): Promise<Musica[]> {
    return await this.repository.listar();
  }

  async buscar(id: number): Promise<Musica | null> {
    return await this.repository.buscarPorId(id);
  }

  async atualizar(id: number, nome?: string, duracao?: number): Promise<Musica> {
    const musica = await this.repository.buscarPorId(id);
    if (!musica) throw new Error("Música não encontrada");
    if (nome !== undefined) musica.nome = nome;  
    if (duracao !== undefined) musica.duracao = duracao; 
    return await this.repository.atualizar(musica);
  }


  async excluir(id: number): Promise<void> {
    return await this.repository.remover(id);
  }
}