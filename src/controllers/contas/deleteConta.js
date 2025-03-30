import { Sequelize } from "sequelize";
import ContaModel from "../../models/Contas.js";

const deleteConta = async (req, res) => {
    try {
       const { id } = req.params

       const conta = await ContaModel.destroy({ where: { conta_id: id } })

       if (!conta) {
        return res.status(409).json({ error: "Não foi possivel encontrar a conta" })
       }

       res.status(200).json({ message: "Conta deletada" })
    } catch (error) {
        console.error('[CONTROLLER CONTA DELETE] Error: ' + error)
    }
}

export default deleteConta;