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
exports.Medico = void 0;
const typeorm_1 = require("typeorm");
const Pessoa_1 = require("./Pessoa");
let Medico = class Medico extends Pessoa_1.Pessoa {
    constructor(nome, cpf, data_nascimento, crm, especialidade) {
        super(nome, cpf, data_nascimento);
        this.crm = crm;
        this.especialidade = especialidade;
    }
};
exports.Medico = Medico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Medico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Pessoa_1.Pessoa),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Pessoa_1.Pessoa)
], Medico.prototype, "pessoa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "crm", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "especialidade", void 0);
exports.Medico = Medico = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, Date, String, String])
], Medico);
