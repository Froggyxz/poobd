
import { banco } from "./banco"
import express from 'express';
import MusicaRouter from "./route/HospitalRouter";

const minhaAPI = express();
minhaAPI.use(express.json());
minhaAPI.use('/Hospital', MusicaRouter);
const porta = 3000;

minhaAPI.listen(porta, async() => {
    
    banco.initialize().then(() => {
        console.log("Conexão com o banco de dados efetuada com sucesso.")
    }).catch((erro) => console.log(erro));

    console.log('Servidor web rodando na porta 3000');
});