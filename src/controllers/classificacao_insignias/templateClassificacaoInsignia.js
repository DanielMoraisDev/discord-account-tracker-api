import { Sequelize } from "sequelize";
import ClassificacaoInsigniaModel from "../../models/ClassificacaoInsignias.js";

const templateClassificacaoInsignia = async (req, res) => {
    try {
        const classificacaosDecoracao = [
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

        classificacaosDecoracao.map(async (e, i) => {
            await ClassificacaoInsigniaModel.create(e)
            console.log({ message: `Classificacao de insignação: ${e.nome}` })
        })

        if (res) {
            return res.json({message: "Template classificacao de insignia adicionado com sucesso" })
        }

        return console.log({message: "Template classificacao de insignia adicionado com sucesso" })
    } catch (error) {
        console.error('[CLASSIFICACAO INSIGNIA TEMPLATE] Error: ' + error)
    }
}

export default templateClassificacaoInsignia;