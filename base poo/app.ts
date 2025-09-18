import { banco } from "./banco";
import { PacienteService } from "./service/PacienteService";
import { MedicoService } from "./service/MedicoService";
import { ExameService } from "./service/ExameService";
import { ConsultaService } from "./service/ConsultaService";
import { AgendamentoService } from "./service/AgendamentoService";

banco.initialize().then(async () => {
  const pacienteService = new PacienteService();
  const medicoService = new MedicoService();
  const exameService = new ExameService();
  const consultaService = new ConsultaService();
  const agendamentoService = new AgendamentoService();

  // Cadastro de Paciente
  const paciente1 = await pacienteService.cadastrar("João Silva", "12345678900", new Date("1990-05-10"));
  const paciente2 = await pacienteService.cadastrar("Maria Souza", "98765432100", new Date("1985-11-22"));

  // Cadastro de Médico
  const medico1 = await medicoService.cadastrar("Dr. Carlos", "11111111111", new Date("1970-01-01"), "CRM001", "Cardiologia");
  const medico2 = await medicoService.cadastrar("Dra. Ana", "22222222222", new Date("1980-02-02"), "CRM002", "Pediatria");

  // Cadastro de Exame
  const exame1 = await exameService.cadastrar("Hemograma", "EX001", "Hematologia", 50.0);
  const exame2 = await exameService.cadastrar("Raio-X", "EX002", "Radiologia", 120.0);

  
  // Cadastro de Consulta
  const consulta1 = await consultaService.cadastrar(paciente1, medico1, new Date("2025-09-20T10:00:00"), 200.0);

  // Cadastro de Agendamento
  const agendamento1 = await agendamentoService.cadastrar(paciente1, consulta1, exame1, medico1, new Date("2025-09-21T09:00:00"), "Sala 1", "Agendado");

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


  // Buscar paciente por ID
  const pacientePorId = await pacienteService.buscar(paciente1.id);
  console.log("Paciente com ID", paciente1.id, ":", pacientePorId);

  // Buscar médico por ID
  const medicoPorId = await medicoService.buscar(medico1.id);
  console.log("Médico com ID", medico1.id, ":", medicoPorId);

  // Buscar exame por ID
  const examePorId = await exameService.buscar(exame1.id);
  console.log("Exame com ID", exame1.id, ":", examePorId);

  // Buscar consulta por ID
  const consultaPorId = await consultaService.buscar(consulta1.id);
  console.log("Consulta com ID", consulta1.id, ":", consultaPorId);

  // Buscar agendamento por ID
  const agendamentoPorId = await agendamentoService.buscar(agendamento1.id);
  console.log("Agendamento com ID", agendamento1.id, ":", agendamentoPorId);

  // Atualizar paciente
  await pacienteService.atualizar(paciente2.id, "Maria Souza Alterada");
  // Atualizar médico
  await medicoService.atualizar(medico2.id, "Dra. Ana Alterada");
  // Atualizar exame
  await exameService.atualizar(exame2.id, "Raio-X Alterado");
  // Atualizar consulta
  await consultaService.atualizar(consulta1.id, paciente1, medico1, new Date("2025-09-20T11:00:00"), 220.0);
  // Atualizar agendamento
  await agendamentoService.atualizar(agendamento1.id, paciente1, consulta1, exame1, medico1, new Date("2025-09-21T10:00:00"), "Sala 2", "Realizado");
  // Excluir paciente
  await pacienteService.excluir(paciente1.id);
  const pacientesAposExclusao = await pacienteService.listarTodos();
  console.log("Pacientes após exclusão:", pacientesAposExclusao);

  // Excluir médico
  await medicoService.excluir(medico1.id);
  const medicosAposExclusao = await medicoService.listarTodos();
  console.log("Médicos após exclusão:", medicosAposExclusao);

  // Excluir exame
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

});
