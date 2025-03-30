import express from "express"

const router = express.Router()

import contasRouter from "./contas.js";
router.use('/contas/', contasRouter);

import tipoInsigniasRouter from "./tipos_insignia.js";
router.use('/tipo-insignias/', tipoInsigniasRouter);

export default router;