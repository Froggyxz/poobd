import 'reflect-metadata';
import { banco } from "./banco";
import { PacienteService } from "./service/PacienteService";
import { MedicoService } from "./service/MedicoService";
import { ExameService } from "./service/ExameService";
import { ConsultaService } from "./service/ConsultaService";
import { AgendamentoService } from "./service/AgendamentoService";
import { Consulta } from "./entity/Consulta"; 

banco.initialize().then(async () => {
  const pacienteService = new PacienteService();
  const medicoService = new MedicoService();
  const exameService = new ExameService();
  const consultaService = new ConsultaService();
  const agendamentoService = new AgendamentoService();

  // Cadastro de Paciente
  const paciente1 = await pacienteService.criar("João Silva", "12345678900", new Date("1990-05-10"));
  const paciente2 = await pacienteService.criar("Maria Souza", "98765432100", new Date("1985-11-22"));

  // Cadastro de Médico
  const medico1 = await medicoService.criar(1, "Dr. Carlos", "11111111111", new Date("1970-01-01"), "CRM001", "Cardiologia");
  const medico2 = await medicoService.criar(2, "Dra. Ana", "22222222222", new Date("1980-02-02"), "CRM002", "Pediatria");

  // Cadastro de Exame
  const exame1 = await exameService.criar(1, "Hemograma", "EX001", "Hematologia", 50.0);
  const exame2 = await exameService.criar(2, "Raio-X", "EX002", "Radiologia", 120.0);

  
  // Cadastro de Consulta
  let consulta1: Consulta = new Consulta(1, paciente1, medico1, new Date("2025-09-20T10:00:00"), 200.0);
  await consultaService.criar(consulta1);

  // Cadastro de Agendamento
  const agendamento1 = await agendamentoService.criar(1, paciente1, consulta1, exame1, medico1, new Date("2025-09-21T09:00:00"), "Sala 1", "Agendado");

  // Listar todos os pacientes
  const todosPacientes = await pacienteService.listarTodos();
  console.log("Todos os pacientes:", todosPacientes);

  // Listar todos os médicos
  const todosMedicos = await medicoService.listarTodos();
  console.log("Todos os médicos:", todosMedicos);

  // Listar todos os exames
  const todosExames = await exameService.listarTodos();
  console.log("Todos os exames:", todosExames);

  // Listar todas as consultas
  const todasConsultas = await consultaService.listarTodos();
  console.log("Todas as consultas:", todasConsultas);

  // Listar todos os agendamentos
  const todosAgendamentos = await agendamentoService.listarTodos();
  console.log("Todos os agendamentos:", todosAgendamentos);

  // ================
  const pacientePorId = await pacienteService.buscar(1);
  console.log("Paciente com ID", paciente1.id, ":", pacientePorId);

  const medicoPorId = await medicoService.buscar(1);
  console.log("Médico com ID", medico1.id, ":", medicoPorId);

  const examePorId = await exameService.buscar(exame1.id);
  console.log("Exame com ID", exame1.id, ":", examePorId);

  const consultaPorId = await consultaService.buscar(1);
  console.log("Consulta com ID", consulta1.id, ":", consultaPorId);

  const agendamentoPorId = await agendamentoService.buscar(1);
  console.log("Agendamento com ID", agendamento1.id, ":", agendamentoPorId);


  /*
  // Atualizar entidades usando objetos completos
  await pacienteService.atualizar(paciente2.id, "Maria Souza Alterada");
  await medicoService.atualizar(medico2.id, "Dra. Ana Alterada");
  await exameService.atualizar(exame2.id, "Raio-X Alterado");
  await consultaService.atualizar(consulta1.id, pacientePorId, medicoPorId, new Date("2025-09-20T11:00:00"), 220.0);
  await agendamentoService.atualizar(agendamento1.id, pacientePorId, consultaPorId, examePorId, medicoPorId, new Date("2025-09-21T10:00:00"), "Sala 2", "Realizado");

  // Excluir agendamentos e consultas relacionados ao paciente antes de excluir paciente
  const agendamentosPaciente1 = (await agendamentoService.listarTodos()).filter(a => a.paciente && a.paciente.id === paciente1.id);
  for (const agendamento of agendamentosPaciente1) {
    await agendamentoService.excluir(agendamento.id);
  }
  // Após excluir agendamentos, excluir consultas relacionadas
  const consultasPaciente1 = (await consultaService.listarTodos()).filter(c => c.paciente && c.paciente.id === paciente1.id);
  for (const consulta of consultasPaciente1) {
    await consultaService.excluir(consulta.id);
  }
  // Agora pode excluir o paciente
  await pacienteService.excluir(paciente1.id);
  const pacientesAposExclusao = await pacienteService.listarTodos();
  console.log("Pacientes após exclusão:", pacientesAposExclusao);

  // Excluir médico (com limpeza de dependências)
  const agendamentosMedico1 = (await agendamentoService.listarTodos()).filter(a => a.medico && a.medico.id === medico1.id);
  for (const agendamento of agendamentosMedico1) {
    await agendamentoService.excluir(agendamento.id);
  }
  const consultasMedico1 = (await consultaService.listarTodos()).filter(c => c.medico && c.medico.id === medico1.id);
  for (const consulta of consultasMedico1) {
    await consultaService.excluir(consulta.id);
  }
  await medicoService.excluir(medico1.id);
  const medicosAposExclusao = await medicoService.listarTodos();
  console.log("Médicos após exclusão:", medicosAposExclusao);

  // Excluir exame (com limpeza de dependências)
  const agendamentosExame1 = (await agendamentoService.listarTodos()).filter(a => a.exame && a.exame.id === exame1.id);
  for (const agendamento of agendamentosExame1) {
    await agendamentoService.excluir(agendamento.id);
  }
  await exameService.excluir(exame1.id);
  const examesAposExclusao = await exameService.listarTodos();
  console.log("Exames após exclusão:", examesAposExclusao);

  // Excluir consulta
  await consultaService.excluir(consulta1.id);
  const consultasAposExclusao = await consultaService.listarTodos();
  console.log("Consultas após exclusão:", consultasAposExclusao);

  // Excluir agendamento
  await agendamentoService.excluir(agendamento1.id);
  const agendamentosAposExclusao = await agendamentoService.listarTodos();
  console.log("Agendamentos após exclusão:", agendamentosAposExclusao);

  */


});
