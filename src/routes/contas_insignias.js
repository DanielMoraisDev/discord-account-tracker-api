import express from "express"
import contasInsigniasController from "../controllers/contas_insignias/contasInsigniasController.js";

const contasInsigniasRouter = express.Router()

contasInsigniasRouter.post("/create", (req, res) => {
    return contasInsigniasController.create(req, res);
})

contasInsigniasRouter.post("/template", (req, res) => {
    return contasInsigniasController.template(req, res);
})

export default contasInsigniasRouter;