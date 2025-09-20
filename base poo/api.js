"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = require("./banco");
const express_1 = __importDefault(require("express"));
const HospitalRouter_1 = __importDefault(require("./route/HospitalRouter"));
const minhaAPI = (0, express_1.default)();
minhaAPI.use(express_1.default.json());
minhaAPI.use('/Hospital', HospitalRouter_1.default);
const porta = 3000;
minhaAPI.listen(porta, async () => {
    banco_1.banco.initialize().then(() => {
        console.log("Conexão com o banco de dados efetuada com sucesso.");
    }).catch((erro) => console.log(erro));
    console.log('Servidor web rodando na porta 3000');
});
