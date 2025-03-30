import express from "express"

const router = express.Router()

import contasRouter from "./contas.js";
router.use('/contas/', contasRouter);

import classificacaoInsigniasRouter from "./classificacao_insignias.js";
router.use('/classificacao-insignias/', classificacaoInsigniasRouter);

import classificacaoDecoracoesRouter from "./classificacao_decoracoes.js";
router.use('/classificacao-decoracoes/', classificacaoDecoracoesRouter);

import decoracoesRouter from "./decoracoes.js";
router.use('/decoracoes/', decoracoesRouter);

import insigniasRouter from "./insignias.js";
router.use('/insignias/', insigniasRouter);

export default router;