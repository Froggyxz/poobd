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
exports.Consulta = void 0;
const typeorm_1 = require("typeorm");
const Paciente_1 = require("./Paciente");
const Medico_1 = require("./Medico");
let Consulta = class Consulta {
    constructor(id, paciente, medico, data_consulta, valor) {
        this.id = id;
        this.paciente = paciente;
        this.medico = medico;
        this.data_consulta = data_consulta;
        this.valor = valor;
    }
};
exports.Consulta = Consulta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Consulta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Paciente_1.Paciente),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Paciente_1.Paciente)
], Consulta.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Medico_1.Medico),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Medico_1.Medico)
], Consulta.prototype, "medico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Consulta.prototype, "data_consulta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Consulta.prototype, "valor", void 0);
exports.Consulta = Consulta = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number, Paciente_1.Paciente, Medico_1.Medico, Date, Number])
], Consulta);
