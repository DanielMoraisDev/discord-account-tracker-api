import { Sequelize } from "sequelize";
import ClassificacaoDecoracaoModel from "../../models/ClassificacaoDecoracoes.js";

const templateClassificacaoDecoracao = async (req, res) => {
    try {
        const classificacaoDecoracao = [
            {
                nome: "comum",
                valor: 10
            },
            {
                nome: "raro",
                valor: 20
            },
            {
                nome: "muito raro",
                valor: 30
            },
            {
                nome: "lendário",
                valor: 40
            }
        ]

        classificacaoDecoracao.map(async (e, i) => {
            await ClassificacaoDecoracaoModel.create(e)
            console.log({ message: `Classificacao de decoração: ${e.nome}` })
        })

        if (res) {
            return res.json({message: "Template de classificacao decoração adicionado com sucesso" })
        }

        return console.log({message: "Template de classificacao decoração adicionado com sucesso" })
    } catch (error) {
        console.error('[CLASSIFICACAO DECORAÇÃO TEMPLATE] Error: ' + error)
    }
}

export default templateClassificacaoDecoracao;