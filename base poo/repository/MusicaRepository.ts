import { Repository } from 'typeorm';
import { Musica } from "../entity/Musica";
import { banco } from "../banco";

export class MusicaRepository {
  private repositorio: Repository<Musica>;

  constructor(){
    this.repositorio = banco.getRepository(Musica);
  }

  async criar(musica: Musica): Promise<Musica> {
    return await this.repositorio.save(musica);
  }

  async listar(): Promise<Musica[]> {
    return await this.repositorio.find();
  }

  async buscarPorId(id: number): Promise<Musica | null> {
    return await this.repositorio.findOneBy({ _id: id } as any);
  }

  async atualizar(musica: Musica): Promise<Musica> {
    return await this.repositorio.save(musica);
  }

  async remover(id: number): Promise<void> {
    await this.repositorio.delete(id);
  }
}