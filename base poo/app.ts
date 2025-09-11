import { banco } from "./banco";
import { MusicaService } from "./service/MusicaService";

banco.initialize().then(async () => {
  const musicaService:MusicaService = new MusicaService();

  const imagine = await musicaService.cadastrar("Imagine", 183);
  await musicaService.atualizar(imagine.id, "Imagine - Alterada", 187);
  
  await musicaService.cadastrar("Bohemian Rhapsody", 354);
  await musicaService.cadastrar("Stairway to Heaven", 482);

  const todasMusicas = await musicaService.listarTodos();
  console.log("Todas as músicas:", todasMusicas);

  const musicaPorId = await musicaService.buscar(2);
  console.log("Música com ID 2:", musicaPorId);


  await musicaService.excluir(1);
  const musicasAposExclusao = await musicaService.listarTodos();
  console.log("Músicas após exclusão da ID 1:", musicasAposExclusao);
});
