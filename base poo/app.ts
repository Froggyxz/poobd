import { banco } from "./banco";
import { HospitalService } from "./service/HospitalService";

banco.initialize().then(async () => {
  const HospitalService:HospitalService = new HospitalService();

  const imagine = await HospitalService.cadastrar("Imagine", 183);
  await HospitalService.atualizar(imagine.id, "Imagine - Alterada", 187);
  
  await HospitalService.cadastrar("Bohemian Rhapsody", 354);
  await HospitalService.cadastrar("Stairway to Heaven", 482);

  const todosHospitais = await HospitalService.listarTodos();
  console.log("Todos os hospitais:", todosHospitais);

  const hospitalPorId = await HospitalService.buscar(2);
  console.log("Hospital com ID 2:", hospitalPorId);


  await HospitalService.excluir(1);
  const hospitaisAposExclusao = await HospitalService.listarTodos();
  console.log("Hospitais após exclusão da ID 1:", hospitaisAposExclusao);
});
