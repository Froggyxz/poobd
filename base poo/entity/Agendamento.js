"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agendamento = void 0;
const typeorm_1 = require("typeorm");
const Paciente_1 = require("./Paciente");
const Exame_1 = require("./Exame");
const Medico_1 = require("./Medico");
const Consulta_1 = require("./Consulta");
let Agendamento = class Agendamento {
    constructor(paciente, consulta, exame, medico, data_agendamento, sala, status) {
        this.paciente = paciente;
        this.consulta = consulta;
        this.exame = exame;
        this.medico = medico;
        this.data_agendamento = data_agendamento;
        this.sala = sala;
        this.status = status;
    }
};
exports.Agendamento = Agendamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Agendamento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Paciente_1.Paciente),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Paciente_1.Paciente)
], Agendamento.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Consulta_1.Consulta),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Consulta_1.Consulta)
], Agendamento.prototype, "consulta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Exame_1.Exame),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Exame_1.Exame)
], Agendamento.prototype, "exame", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Medico_1.Medico),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Medico_1.Medico)
], Agendamento.prototype, "medico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Agendamento.prototype, "data_agendamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Agendamento.prototype, "sala", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Agendamento.prototype, "status", void 0);
exports.Agendamento = Agendamento = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Paciente_1.Paciente, Consulta_1.Consulta, Exame_1.Exame, Medico_1.Medico, Date, String, String])
], Agendamento);
