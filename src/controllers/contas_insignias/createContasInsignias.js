import { Sequelize } from "sequelize";
import ContaInsigniasModel from "../../models/ContaDecoracoes.js";

const createContaInsignias = async (req, res) => {
    try {
        const {conta_id, insignias_id} = req.body

        if (!conta_id) {
            return res.status(400).json({ message: "O id da conta é necessário" });
        }

        if (!insignias_id) {
            return res.status(400).json({ message: "O id da decoração é necessário" });
        }

        const insignias = {
            conta_id: conta_id,
            Insignias_id: insignias_id
        }

        const createContaInsignias = await ContaInsigniasModel.create(insignias)

        if (!createContaInsignias) {
            return res.status(500).json({ error: "Não foi possivel registrar a conta" })
        }

        return res.status(201).json({createContaInsignias, message: "Conta registrada com sucesso" })
    } catch (error) {
        console.error('[CONTROLLER CONTA-INSIGNIAS CREATE] Error: ' + error)
    }
}

export default createContaInsignias;