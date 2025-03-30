import express from "express"
import contasController from "../controllers/contas/contasController.js";

const contasRouter = express.Router()

contasRouter.post("/create", (req, res) => {
    return contasController.create(req, res);
})

export default contasRouter;