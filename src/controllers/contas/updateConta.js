import { Sequelize } from "sequelize";
import ContaModel from "../../models/Contas.js";

const updateConta = async (req, res) => {
    try {
        const { id } = req.params

        const contaFind = await ContaModel.findOne({ where: { conta_id: id } })

        if (!contaFind) {
            return res.status(409).json({ error: "Não foi possivel encontrar a conta" })
        }

        const { conta_id, nome_convite, nome_servidor, link_servidor, tempo_nitro, nivel_nitro, token } = req.body

        const ultima_atualizacao = new Date();

        const conta = {
            conta_id: conta_id,
            nome_convite: nome_convite,
            nome_servidor: nome_servidor,
            link_servidor: link_servidor,
            tempo_nitro: tempo_nitro,
            nivel_nitro: nivel_nitro,
            ultima_atualizacao: ultima_atualizacao,
            token: token
        }

        const updateConta = await ContaModel.update(conta, { where: { conta_id: id } })

        if (!updateConta) {
            return res.status(409).json({ error: "Não foi possivel atualizar a conta" })
        }

        res.status(200).json({ message: "Conta atualizada" })
    } catch (error) {
        console.log('[CONTROLLER CONTA UPDATE] Error: ' + error)
    }
}

export default updateConta;