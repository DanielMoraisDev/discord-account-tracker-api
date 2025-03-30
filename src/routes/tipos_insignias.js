import express from "express"
import tipoInsigniasController from "../controllers/tipos_insignias/tipoInsigniasController.js";

const tipoInsigniasRouter = express.Router()

tipoInsigniasRouter.post("/create", (req, res) => {
    return tipoInsigniasController.create(req, res);
})

tipoInsigniasRouter.post("/template", (req, res) => {
    return tipoInsigniasController.template(req, res)
})

export default tipoInsigniasRouter;