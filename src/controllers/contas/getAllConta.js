import { Sequelize } from "sequelize";
import ContaModel from "../../models/Contas.js";

const getAllConta = async (req, res) => {
    try {
        const contas = await ContaModel.findAll()
        res.status(200).json(contas)
    } catch (error) {
        console.error('[CONTROLLER CONTA GET ALL] Error: ' + error)
    }
}

export default getAllConta;