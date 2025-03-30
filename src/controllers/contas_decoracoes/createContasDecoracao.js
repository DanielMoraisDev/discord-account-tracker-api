import { Sequelize } from "sequelize";
import ContaDecoracaoModel from "../../models/ContaDecoracoes.js";

const createContaDecoracao = async (req, res) => {
    try {
        const {conta_id, decoracao_id} = req.body

        if (!conta_id) {
            return res.status(400).json({ message: "O id da conta é necessário" });
        }

        if (!decoracao_id) {
            return res.status(400).json({ message: "O id da decoração é necessário" });
        }

        const decoracao = {
            conta_id: conta_id,
            decoracao_id: decoracao_id
        }

        const createContaDecoracao = await ContaDecoracaoModel.create(decoracao)

        if (!createContaDecoracao) {
            return res.status(500).json({ error: "Não foi possivel registrar a conta" })
        }

        return res.status(201).json({createContaDecoracao, message: "Conta registrada com sucesso" })
    } catch (error) {
        console.error('[CONTROLLER CONTA-DECORAÇÃO CREATE] Error: ' + error)
    }
}

export default createContaDecoracao;