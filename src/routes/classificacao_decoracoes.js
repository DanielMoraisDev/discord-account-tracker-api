import express from "express"
import classificacaoDecoracoesController from "../controllers/classificacao_decoracoes/classificacaoDecoracoesController.js";

const classificacaoDecoracoesRouter = express.Router()

classificacaoDecoracoesRouter.post("/create", (req, res) => {
    return classificacaoDecoracoesController.create(req, res);
})

classificacaoDecoracoesRouter.post("/template", (req, res) => {
    return classificacaoDecoracoesController.template(req, res);
})

export default classificacaoDecoracoesRouter;