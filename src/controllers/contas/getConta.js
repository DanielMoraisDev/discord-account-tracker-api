import { Sequelize } from "sequelize";
import ContaModel from "../../models/Contas.js";

const getConta = async (req, res) => {
    try {
       const { id } = req.params

       const conta = await ContaModel.findOne({ where: { conta_id: id } })

       if (!conta) {
        return res.status(409).json({ error: "Não foi possivel encontrar a conta" })
       }

       res.status(200).json({ conta })
    } catch (error) {
        console.error('[CONTROLLER CONTA GET ONE] Error: ' + error)
    }
}

export default getConta;