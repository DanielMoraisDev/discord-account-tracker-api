import { Sequelize } from "sequelize";
import ContaDecoracaoModel from "../../models/ContaDecoracoes.js";

const templateDecoracao = async (req, res) => {
    try {
        const contasDecoracao = [
            {
                conta_id: "112233445566778899",
                decoracao_id: 1
            },
            {
                conta_id: "554433221100998877",
                decoracao_id: 2
            },
            {
                conta_id: "987654321098765432",
                decoracao_id: 3
            },
        ]

        contasDecoracao.map(async (e, i) => {
            await ContaDecoracaoModel.create(e)
            console.log({ message: `Conta-decoração: ${e.conta_id}` })
        })

        if (res) {
            return res.json({message: "Template de conta-decoração adicionado com sucesso" })
        }

        return console.log({message: "Template de conta-decoração adicionado com sucesso" })
    } catch (error) {
        console.error('[CONTA-DECORAÇÃO TEMPLATE] Error: ' + error)
    }
}

export default templateDecoracao;