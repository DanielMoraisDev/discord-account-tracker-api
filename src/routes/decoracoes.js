import express from "express"
import decoracoesController from "../controllers/decoracoes/decoracoesController.js";

const decoracoesRouter = express.Router()

decoracoesRouter.post("/create", (req, res) => {
    return decoracoesController.create(req, res);
})

decoracoesRouter.post("/template", (req, res) => {
    return decoracoesController.template(req, res);
})

export default decoracoesRouter;