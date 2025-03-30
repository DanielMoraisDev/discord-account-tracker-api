import express from "express"

const router = express.Router()

import contasRouter from "./contas.js";
router.use('/contas/', contasRouter);

import tipoInsigniasRouter from "./tipos_insignias.js";
router.use('/tipos-insignias/', tipoInsigniasRouter);

import tipoDecoracoesRouter from "./tipos_decoracoes.js";
router.use('/tipos-decoracoes/', tipoDecoracoesRouter);

export default router;