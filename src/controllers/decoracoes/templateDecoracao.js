import { Sequelize } from "sequelize";
import DecoracaoModel from "../../models/Decoracoes.js";

const templateDecoracao = async (req, res) => {
    try {
        const tiposDecoracao = [
            {
                nome: "Chapeu de hallowen",
                classificacao_decoracao_id: 1
            },
            {
                nome: "Banner valorant",
                classificacao_decoracao_id: 2
            },
            {
                nome: "Intro minecraft",
                classificacao_decoracao_id: 3
            },
        ]

        tiposDecoracao.map(async (e, i) => {
            await DecoracaoModel.create(e)
            console.log({ message: `Decoração: ${e.nome}` })
        })

        if (res) {
            return res.json({message: "Template de decoração adicionado com sucesso" })
        }

        return console.log({message: "Template de decoração adicionado com sucesso" })
    } catch (error) {
        console.error('[DECORAÇÃO TEMPLATE] Error: ' + error)
    }
}

export default templateDecoracao;