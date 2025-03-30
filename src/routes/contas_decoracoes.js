import express from "express"
import contasDecoracoesController from "../controllers/contas_decoracoes/contasDecoracoesController.js";

const contasDecoracoesRouter = express.Router()

contasDecoracoesRouter.post("/create", (req, res) => {
    return contasDecoracoesController.create(req, res);
})

contasDecoracoesRouter.post("/template", (req, res) => {
    return contasDecoracoesController.template(req, res);
})

export default contasDecoracoesRouter;