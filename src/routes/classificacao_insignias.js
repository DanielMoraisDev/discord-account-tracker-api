import express from "express"
import classificacaoInsigniasController from "../controllers/classificacao_insignias/classificacaoInsigniasController.js";

const classificacaoInsigniasRouter = express.Router()

classificacaoInsigniasRouter.post("/create", (req, res) => {
    return classificacaoInsigniasController.create(req, res);
})

classificacaoInsigniasRouter.post("/template", (req, res) => {
    return classificacaoInsigniasController.template(req, res)
})

export default classificacaoInsigniasRouter;