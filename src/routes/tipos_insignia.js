import express from "express"
import tipoInsigniasController from "../controllers/tipos_insignias/tipoInsigniasController.js";

const tipoInsigniasRouter = express.Router()

tipoInsigniasRouter.post("/create", (req, res) => {
    return tipoInsigniasController.create(req, res);
})

export default tipoInsigniasRouter;