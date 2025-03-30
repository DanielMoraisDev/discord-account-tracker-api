import express from "express"
import insigniasController from "../controllers/insignias/insigniasController.js";

const insigniasRouter = express.Router()

insigniasRouter.post("/create", (req, res) => {
    return insigniasController.create(req, res);
})

insigniasRouter.post("/template", (req, res) => {
    return insigniasController.template(req, res);
})

export default insigniasRouter;