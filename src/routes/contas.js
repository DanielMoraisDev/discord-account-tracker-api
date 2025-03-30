import express from "express"
import contasController from "../controllers/contas/contasController.js";

const contasRouter = express.Router()

contasRouter.post("/create", (req, res) => {
    return contasController.create(req, res);
})

contasRouter.post("/template", (req, res) => {
    return contasController.template(req, res);
})

contasRouter.get("/getAll", (req, res) => {
    return contasController.getAll(req, res);
})

contasRouter.get("/search/:id", (req, res) => {
    return contasController.getOne(req, res);
})

contasRouter.put("/update/:id", (req, res) => {
    return contasController.update(req, res);
})

contasRouter.delete("/delete/:id", (req, res) => {
    return contasController.delete(req, res);
})

export default contasRouter;