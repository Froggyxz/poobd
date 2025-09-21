import express from "express";
import { PacienteController } from '../controller/PacienteController';
import { MedicoController } from '../controller/MedicoController';
import { ConsultaController } from '../controller/ConsultaController';
import { ExameController } from '../controller/ExameController';
import { AgendamentoController } from '../controller/AgendamentoController';

const HospitalRouter = express.Router();

const pacienteController = new PacienteController();
const medicoController = new MedicoController();
const consultaController = new ConsultaController();
const exameController = new ExameController();
const agendamentoController = new AgendamentoController();

// Paciente routes
HospitalRouter.get('/pacientes', (req, res) => pacienteController.listar(req, res));
HospitalRouter.post('/pacientes', (req, res) => pacienteController.criar(req, res));
HospitalRouter.put('/pacientes/:id', (req, res) => pacienteController.atualizar(req, res));
HospitalRouter.delete('/pacientes/:id', (req, res) => pacienteController.remover(req, res));

// Medico routes
HospitalRouter.get('/medicos', (req, res) => medicoController.listar(req, res));
HospitalRouter.post('/medicos', (req, res) => medicoController.criar(req, res));
HospitalRouter.put('/medicos/:id', (req, res) => medicoController.atualizar(req, res));
HospitalRouter.delete('/medicos/:id', (req, res) => medicoController.remover(req, res));

// Consulta routes
HospitalRouter.get('/consultas', (req, res) => consultaController.listar(req, res));
HospitalRouter.post('/consultas', (req, res) => consultaController.criar(req, res));
HospitalRouter.put('/consultas/:id', (req, res) => consultaController.atualizar(req, res));
HospitalRouter.delete('/consultas/:id', (req, res) => consultaController.remover(req, res));

// Exame routes
HospitalRouter.get('/exames', (req, res) => exameController.listar(req, res));
HospitalRouter.post('/exames', (req, res) => exameController.criar(req, res));
HospitalRouter.put('/exames/:id', (req, res) => exameController.atualizar(req, res));
HospitalRouter.delete('/exames/:id', (req, res) => exameController.remover(req, res));

// Agendamento routes
HospitalRouter.get('/agendamentos', (req, res) => agendamentoController.listar(req, res));
HospitalRouter.post('/agendamentos', (req, res) => agendamentoController.criar(req, res));
HospitalRouter.put('/agendamentos/:id', (req, res) => agendamentoController.atualizar(req, res));
HospitalRouter.delete('/agendamentos/:id', (req, res) => agendamentoController.remover(req, res));

export default HospitalRouter;