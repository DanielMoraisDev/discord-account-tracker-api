import express from "express"
import tipoDecoracoesController from "../controllers/tipos_decoracoes/tipoDecoracoesController.js";

const tipoDecoracoesRouter = express.Router()

tipoDecoracoesRouter.post("/create", (req, res) => {
    return tipoDecoracoesController.create(req, res);
})

tipoDecoracoesRouter.post("/template", (req, res) => {
    return tipoDecoracoesController.template(req, res);
})

export default tipoDecoracoesRouter;