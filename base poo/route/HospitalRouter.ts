import express from "express";
import { MusicaController } from '../controller/MusicaController';

const MusicaRouter = express.Router();
const musicaController = new MusicaController();

MusicaRouter.get('/', (req, res) => { musicaController.listar(req,res) });
MusicaRouter.post('/', (req, res) => { musicaController.criar(req,res) });
MusicaRouter.put('/:id', (req, res) => { musicaController.atualizar(req,res) });
MusicaRouter.delete('/:id', (req, res) => { musicaController.remover(req,res) });

export default MusicaRouter;
